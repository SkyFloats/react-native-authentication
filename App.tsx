import React from 'react';
import {} from 'react-native/Libraries/NewAppScreen';
import { Router } from './src/routes/Router';
import { AuthProvider } from './src/contexts/Auth';

const App = () => {
  return(
    <AuthProvider>
          <Router/>
    </AuthProvider>
  );
};

export default App;