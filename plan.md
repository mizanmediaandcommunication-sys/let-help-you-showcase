# Implementation Plan - User Registration & Admin Login

Implement a front-end user registration interface and an administrative login interface with robust validation and feedback.

## 1. Components
### `src/components/RegistrationForm.tsx`
- **Fields**: Username, Email, Password.
- **Validation (Zod)**:
  - Username: Alphanumeric, min 3 chars.
  - Email: Valid format.
  - Password: Min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special character.
- **UI**: Single-step form (removing previous multi-step complexity), focus states, loading states, success feedback.

### `src/components/AdminLogin.tsx` (New)
- **Fields**: Admin Username, Admin Password.
- **Validation**: Basic required fields with alphanumeric username.
- **UI**: Clean card-based login, focus states, error messages, success feedback.

### `src/App.tsx`
- **Routing**: Manage state to switch between:
  - Hero Page (Home)
  - User Registration Form
  - Admin Login Interface
  - Success State
- **Navigation**: Add a way to access Admin Login from the Hero or Registration page.

## 2. Styling & UX
- **Focus States**: Implement `focus-visible:ring-2 focus-visible:ring-green-600` on all inputs.
- **Feedback**: Use `sonner` for toast notifications and inline error messages for form validation.
- **Animations**: Use `framer-motion` for smooth transitions between views.
- **Theme**: Preserve the "Siket Sacco" green/slate aesthetic.

## 3. Technical Requirements
- React 19 + Vite
- Tailwind CSS v4
- React Hook Form + Zod for validation
- Lucide React for iconography
- Sonner for notifications
