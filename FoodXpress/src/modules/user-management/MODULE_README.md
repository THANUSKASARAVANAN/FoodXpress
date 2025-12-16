# User Management Module

**Developer:** Tanushka

## Overview
This module handles all user profile management functionality including profile editing, order history, addresses, payment methods, favorites, and settings.

## Structure

```
user-management/
├── components/
│   ├── profile/
│   │   ├── ProfileHeader.jsx    # User profile header with name/contact
│   │   ├── Sidebar.jsx          # Navigation sidebar
│   │   └── OrderCard.jsx        # Order display component
│   ├── Loader.jsx               # Loading spinner
│   ├── ErrorMessage.jsx         # Error display component
│   └── UserManagement.tsx       # Standalone user form component
├── pages/
│   ├── ProfileLayout.jsx        # Main layout with sidebar
│   ├── OrdersPage.jsx           # Order history page
│   ├── EditProfilePage.jsx      # Profile editing page
│   ├── AddressesPage.jsx        # Address management page
│   ├── PaymentsPage.jsx         # Payment methods page
│   ├── FavouritesPage.jsx       # Favorite restaurants page
│   └── SettingsPage.jsx         # User settings page
├── api/
│   └── userService.js           # API service functions
├── UserManagement.jsx           # Main module component
├── App.tsx                      # Standalone app (for development)
└── index.jsx                    # Module exports
```

## Features

- **Profile Management**: Edit name, email, mobile number
- **Order History**: View past orders with details
- **Address Management**: Add, edit, delete delivery addresses
- **Favorites**: Manage favorite restaurants
- **Settings**: Notification preferences and privacy settings
- **Responsive Design**: Mobile-first responsive layout

## API Integration

The module integrates with backend APIs for:
- User profile data
- Order history
- Address management
- User preferences

Fallback mock data is provided when APIs are unavailable.

## Usage

```jsx
import { UserManagement } from '@/modules/user-management';

// Use in main app routing
<Route path="/profile/*" element={<UserManagement />} />
```

## Routes

- `/profile/orders` - Order history (default)
- `/profile/edit` - Edit profile
- `/profile/addresses` - Manage addresses
- `/profile/payments` - Payment methods
- `/profile/favourites` - Favorite restaurants
- `/profile/settings` - User settings