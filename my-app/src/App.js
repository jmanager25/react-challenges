import css from './App.module.css';
import FunctionalSidebar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm';
import Content from './components/Content';

function App() {
  return (
    <div className={css.App}>
      {/* {<NavBarSimple />} */}
      {<NavBarForm />}
      {<FunctionalSidebar />}
      {<Content />}
    </div>
  );
}

export default App;