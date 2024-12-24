export  function Button() {

    const handleRefresh = () => {
        window.location.reload();
    };

    return(
        <>
        <button style={{
            width: "100px",
            border: "5px solid black",
            background: "none",
            textTransform: "uppercase",
            fontWeight: "bold",
            cursor: "pointer",
            color: "black"
        }} onClick={handleRefresh}>
            Restart
        </button>
        </>
    )
}