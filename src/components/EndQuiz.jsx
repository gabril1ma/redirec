
function EndQuiz(props) {

    let header;
    
    header = (
        setTimeout(function() {
            window.location.href = "https://ev.braip.com/ref?pv=promm8jm&af=afi60lz3g";
        }, 3000),
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-300 text-center">
            Você se encaixa perfeitamente para o uso do metodo Emagrecedor! <br/> <br/>
            Agora será redirecionado ao nosso site...
        </h1>
        );

    return (
        <div className="flex justify-center items-center h-screen">
            {header}
            
        </div>
        
    );
}

export default EndQuiz;
