import logo from "./logo.svg";
import style from "./App.module.scss";
import Counter from "./screens/Counter";

function App() {
    return (
        <div className={style.App}>
            <header className={style["App-header"]}>
                <Counter />
                <img src={logo} className={style["App-logo"]} alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className={style["App-link"]}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
