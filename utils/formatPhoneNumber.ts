const formatPhoneNumber = (input: string): string => {
    if(!input) return ""
  const cleaned = input.replace(/\D/g, "");
  if (cleaned.length !== 11) return input;

  return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 7)}-${cleaned.slice(7)}`;
};

export default formatPhoneNumber;
