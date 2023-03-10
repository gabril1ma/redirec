import SubjectCard from "../components/SubjectCard";
import Header from "../components/Header";




function Home(props) {
    const onClick = props.onClick;
    return (
        
        <div>
            
            <Header>Faça o teste para saber se esse método é para você! <br/>
            <span className=" text-pink-400 dark:text-pink-400 baixo animate__fadeIn"><small><i>clique no botão abaixo para continuar...</i></small></span></Header>
            

            <div className="flex flex-row flex-wrap justify-center mt-16 bot animate__pulse">
                
                <SubjectCard
                    
                    subject="Fazer Teste"
                    onClick={onClick}
                />
    
               
            </div>
        </div>
    );
}

export default Home;
