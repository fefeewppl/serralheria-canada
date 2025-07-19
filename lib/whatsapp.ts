// Helper para links do WhatsApp da Serralheria Canadá

const WHATSAPP_NUMBER = "5518981270860";

export const createWhatsAppLink = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const WHATSAPP_MESSAGES = {
  general: "Olá, vi o site da Serralheria Canadá e gostaria de um orçamento",
  container: "Olá, vi o site da Serralheria Canadá e gostaria de um orçamento de container",
  contact: "Olá, vi o site da Serralheria Canadá e gostaria de mais informações"
};

export const WHATSAPP_LINKS = {
  general: createWhatsAppLink(WHATSAPP_MESSAGES.general),
  container: createWhatsAppLink(WHATSAPP_MESSAGES.container),
  contact: createWhatsAppLink(WHATSAPP_MESSAGES.contact)
}; 