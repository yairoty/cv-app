export interface EnvVariables {
  userFullName: string;
  phone: string;
  whatsapp: string;
  email: string;
  linkedin: string;
  github: string;
}

export const getEnv = (): EnvVariables => {
  return {
    userFullName: import.meta.env.VITE_USER_FULL_NAME || 'my full name',
    phone: import.meta.env.VITE_PHONE || '+123 4567890',
    whatsapp: import.meta.env.VITE_WHATSAPP || '+123 4567890',
    email: import.meta.env.VITE_EMAIL || 'user.mail@mail.com',
    linkedin: import.meta.env.VITE_LINKEDIN || 'my-linkedin-url.com',
    github: import.meta.env.VITE_GITHUB || 'my-github-url.com',
  };
};
