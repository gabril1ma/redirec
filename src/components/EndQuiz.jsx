import confetti from "canvas-confetti"
function EndQuiz(props) {

    let header;
    var end = Date.now() + (15 * 1000);


var colors = ['#00FF00', '#DA70D6'];

(function frame() {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors
  });
  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
}());
    header = (
        setTimeout(function() {
            window.location.href = "https://ev.braip.com/ref?pv=promm8jm&af=afi60lz3g";
        }, 4500),
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-800 text-center baixo animate__jackInTheBox">
            Você se encaixa <span style={{color: 'lightgreen'}}>perfeitamente</span> para o uso do método Emagrecedor! <br/> <br/>
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
