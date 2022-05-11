interface DataInvoiceProps {
  id: string;
  client: string;
  moneyValue: string;
  maxDueDate: string;
  collaborator: string;
  description?: string;
}

interface ClientProps {
  name: string;
}

interface CollaboratorProps {
  name: string;
}

interface InvoiceProps {
  client: string;
  collaborator: string;
  createAt: string;
  maxDueDate: string;
  moneyValue: string;
  description?: string;
}

interface DataClientSingle {
  client: string;
  collaborator: string;
  createdAt: string;
  maxDueDate: string;
  moneyValue: string;
  description?: string;
}