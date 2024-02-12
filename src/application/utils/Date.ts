import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatDate = (value: number, mask = "dd/MM/yyyy") => {
  return format(new Date(value), mask, { locale: ptBR });
};
