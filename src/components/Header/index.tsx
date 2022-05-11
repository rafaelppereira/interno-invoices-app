import Image from 'next/image';
import { RiAddFill } from 'react-icons/ri';
import { useRouter } from 'next/router';

import { 
  HeaderContainer,  
  TopBar, 
  ContentHeader
} from './styles';

interface HeaderProps {
  title: string;
  description: string;
  isButtonCreate?: boolean;
}

export function Header({ title, description, isButtonCreate }: HeaderProps) {
  const router = useRouter();

  function handleRedirectToPage(url: string) {
    router.push(url);
  }
 
  return (
    <HeaderContainer>
      <TopBar>
        <div>
          {isButtonCreate ? (
            <button type="button" onClick={() => handleRedirectToPage('/auth')}>
              <Image 
                src="/arrow_back.svg"
                alt="Voltar para o login"
                width={50}
                height={50}
              />
            </button>
          ) : (
            <button type="button" onClick={() => handleRedirectToPage('/dashboard')}>
              <Image 
                src="/arrow_back.svg"
                alt="Voltar para o login"
                width={50}
                height={50}
              />
            </button>
          )}

        </div>
        <div>
          <Image
            src="/logo_white.svg"
            alt="Voltar para o login"
            width={60}
            height={60}
          />
        </div>
      </TopBar>
    <ContentHeader>
      <h2>{title}</h2>
      <p>
        {description}
      </p>

      {isButtonCreate && (
        <button type="button" onClick={() => handleRedirectToPage('/dashboard/create')}>
          <RiAddFill /> Criar fatura
        </button>
      )}
    </ContentHeader>
    </HeaderContainer>
  );
}