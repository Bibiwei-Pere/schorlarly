import { useQuery } from '@tanstack/react-query';

export const useClientSecret = () => {
  const fetchClientSecret = () => {
    return new Promise((resolve) => {
      const secret =
        'accs_secret__QKign97zVkjdQFsYeXrbXmeqnUebYr7uhAhcBtY8IzQPhf5'; // Replace with your actual secret
      resolve({ secret });
    });
  };

  return useQuery({ queryKey: ['client-key'], queryFn: fetchClientSecret });
};
