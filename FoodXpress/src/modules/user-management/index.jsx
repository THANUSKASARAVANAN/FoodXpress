// User Management Module - Tanushka
// Export all user management components and services

// Main Module Component
export { default as UserManagement } from './UserManagement.jsx';

// Standalone App Component (for development)
export { default as UserManagementApp } from './App.tsx';

// Components
export { default as ProfileHeader } from './components/profile/ProfileHeader.jsx';
export { default as Sidebar } from './components/profile/Sidebar.jsx';
export { default as OrderCard } from './components/profile/OrderCard.jsx';
export { default as Loader } from './components/Loader.jsx';
export { default as ErrorMessage } from './components/ErrorMessage.jsx';

// Pages
export { default as ProfileLayout } from './pages/ProfileLayout.jsx';
export { default as OrdersPage } from './pages/OrdersPage.jsx';
export { default as EditProfilePage } from './pages/EditProfilePage.jsx';
export { default as AddressesPage } from './pages/AddressesPage.jsx';
export { default as PaymentsPage } from './pages/PaymentsPage.jsx';
export { default as FavouritesPage } from './pages/FavouritesPage.jsx';
export { default as SettingsPage } from './pages/SettingsPage.jsx';

// API Services
export * from './api/userService.js';
