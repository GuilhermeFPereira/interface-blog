
import Logo from '../src/assets/cra vs vite.png'

export default function Post(){
    return (
        <div className='post' >
        <div className='image' >
        <img src={Logo} alt='' />
        </div>
        
        <div className='texts'>
        <h2>Full-house battery backup coming later this year</h2>
        <p className='info'>
          <a className='author' > Guilherme P.Fernandes </a>
          <time>25-07-2023 22:42</time>
        </p>
        <p className='summary' >
Olá tudo bom? Sou Desenvolvedor de software e estou aberto a novos desáfios.
Caso esteja precisando de um Dev para seus projeto. Estou disposto a conversar sobre.
Vou encaminhar meu currículo caso queira me conhecer melhor. Obrigado</p>
        </div>
       
      
       
      </div>

    )
}