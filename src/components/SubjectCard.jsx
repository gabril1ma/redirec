function SubjectCard(props) {
    return (
        <div
            
            onClick={() => props.onClick(props.subject.toLowerCase())}
        >
          <button style={{ backgroundColor: "rgb(255, 30, 98)", fontSize: '25px', color: 'white', width: "250px", height: "75px", borderRadius: "10px" }}>Fazer Teste</button>
        </div>
    );
}

export default SubjectCard;
