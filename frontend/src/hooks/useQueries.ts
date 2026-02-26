import { useMutation } from '@tanstack/react-query';
import { useActor } from './useActor';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function useSubmitMessage() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      if (!actor) throw new Error('Backend not available');
      await actor.submitMessage(data.name, data.email, data.subject, data.message);
    },
  });
}
