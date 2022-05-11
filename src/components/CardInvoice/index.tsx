import Link from 'next/link';
import { RiTimeLine, RiExternalLinkLine, RiDeleteBin7Line, RiShareFill } from 'react-icons/ri';
import { 
  CardInvoiceContainer, 
  Profile, 
  Avatar, 
  Info,
  Redirect,
  Remove
} from "./styles";

interface CardInvoiceProps {
  id: string;
  client: string;
  maxDueDate: string;
  moneyValue: string;
  collaborator: string;
  createdAt: string;
  email: string;
  tel: string;
  onRemoveInvoiceList: (id) => void;
  onRedirectToSharedPage: (tel, client, id, createdAt, email) => void;
}

export function CardInvoice({
  id,
  client,
  maxDueDate,
  moneyValue,
  collaborator,
  createdAt,
  email,
  tel,
  onRemoveInvoiceList,
  onRedirectToSharedPage
}: CardInvoiceProps) {
  const firstLetter = client.substring(0, 1);

  const day = maxDueDate.split('-')[2];
  const month = maxDueDate.split('-')[1];
  const year = maxDueDate.split('-')[0];
  const dateFormmated = day+"/"+month+"/"+year;

  return (
    <CardInvoiceContainer>
      <Profile>
        <div>
          <Avatar>{firstLetter}</Avatar>
        </div>
        <div>
          <h2>{client}</h2>
          <p><RiTimeLine /> Criado em {createdAt}</p>
        </div>
      </Profile>
      <Info>
        <div>
          <p>Data de vencimento: {dateFormmated}</p>
          <p>Criado por: {collaborator}</p>
        </div>
        <div>
          <span>R$ {moneyValue}</span>
        </div>
        <button
          type="button"
          onClick={() => onRedirectToSharedPage(tel, client, id, createdAt, email)}
        >
          <RiShareFill />Compartilhar
        </button>
      </Info>

      <Redirect>
        <Link href={`/invoices/${id}`} passHref>
          <a target="_blank">
            <RiExternalLinkLine />
          </a>    
        </Link>
      </Redirect>
      <Remove>
        <button type="button" onClick={() => onRemoveInvoiceList(id)}>
          <RiDeleteBin7Line />
        </button>
      </Remove>
    </CardInvoiceContainer>
  );
}