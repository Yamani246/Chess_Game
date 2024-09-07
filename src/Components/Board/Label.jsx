const Files = ({ files }) => {
    const getchar = (char) => String.fromCharCode(char+96)
    return (
        <div className="file-display">
            {files.map((x, i) => (
                <div key={i}>{getchar(x)}</div>
            ))}
        </div>
    );
};

const Ranks = ({ ranks }) => {
    return (
        <div className="rank-display">
            {ranks.map((x, i) => (
                <div key={i}>{x}</div>
            ))}
        </div>
    );
};

export default { Files, Ranks };