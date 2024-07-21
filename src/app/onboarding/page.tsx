'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { loadConnectAndInitialize } from '@stripe/connect-js';
import {
  ConnectComponentsProvider,
  ConnectAccountOnboarding,
  ConnectNotificationBanner,
  CollectionOptions,
} from '@stripe/react-connect-js';

export default function Page() {
  const [stripeConnectInstance] = useState(() => {
    const fetchClientSecret = async () => {
      try {
        const response = await axios.post(
          'https://api.staging.event.oyoyoapp.com/api/v1/users/141/stripe-session'
        );
        console.log('RESPONSE', response.data.data);
        const { client_secret: clientSecret } = response.data.data;
        return clientSecret;
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          console.error('An error occurred: ', err.response.data.error);
        } else {
          console.error('An unexpected error occurred: ', err);
        }
        return undefined;
      }
    };
    return loadConnectAndInitialize({
      // This is your test publishable API key.
      publishableKey:
        'pk_test_51P8Se808P4tFOkILjepIzrdm3nKpqoB8JaHmUsAk7zUB3emD58omQ6oxMAoURyXjT1vnq4dMsbUQTLMy2W4HbxaG00XoF2czFW',
      fetchClientSecret: fetchClientSecret,
      appearance: {
        overlays: 'dialog',
        variables: {
          // colorPrimary: '#625afa',
          colorBackground: '#FFFFFF',
        },
      },
    });
  });
  const collectionOptions: CollectionOptions = {
    fields: 'currently_due',
    futureRequirements: 'include',
  };
  return (
    <div className="container">
      <ConnectComponentsProvider connectInstance={stripeConnectInstance}>
        <ConnectNotificationBanner collectionOptions={collectionOptions} />
        <ConnectAccountOnboarding
          collectionOptions={collectionOptions}
          onExit={() => console.log('exist')}
        />
      </ConnectComponentsProvider>
    </div>
  );
}
