import React, { useState, useRef } from 'react';
import { Upload, X, FileText, Check } from 'lucide-react';

interface FileUploadProps {
  id: string;
  accept?: string;
  label: string;
  icon?: React.ReactNode;
  onChange: (file: File | null) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ id, accept, label, icon, onChange }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      onChange(file);

      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setPreview(null);
      }
    }
  };

  const clearFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPreview(null);
    setFileName(null);
    onChange(null);
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <div 
      className={`relative border-2 border-dashed rounded-xl transition-all cursor-pointer overflow-hidden
        ${fileName ? 'border-green-500 bg-green-50' : 'border-slate-300 hover:border-green-500 hover:bg-slate-50'}`}
      onClick={() => inputRef.current?.click()}
    >
      <input 
        type="file" 
        id={id} 
        ref={inputRef}
        accept={accept} 
        className="hidden" 
        onChange={handleFileChange} 
      />
      
      <div className="p-8 flex flex-col items-center justify-center text-center space-y-3">
        {preview ? (
          <div className="relative w-24 h-24 rounded-lg overflow-hidden border-2 border-white shadow-md">
            <img src={preview} alt="Preview" className="w-full h-full object-cover" />
            <button 
              onClick={clearFile}
              className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full shadow-lg"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ) : fileName ? (
          <div className="flex flex-col items-center space-y-2">
            <div className="p-3 bg-green-100 text-green-700 rounded-full">
              <Check className="w-6 h-6" />
            </div>
            <p className="text-sm font-medium text-green-700 truncate max-w-[200px]">{fileName}</p>
            <button onClick={clearFile} className="text-xs text-red-500 hover:underline">Remove</button>
          </div>
        ) : (
          <>
            <div className="p-3 bg-slate-100 text-slate-400 rounded-full group-hover:bg-green-100 group-hover:text-green-600 transition-colors">
              {icon || <Upload className="w-6 h-6" />}
            </div>
            <div>
              <p className="text-sm font-bold text-slate-700">{label}</p>
              <p className="text-xs text-slate-400 mt-1">PNG, JPG or PDF up to 5MB</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FileUpload;