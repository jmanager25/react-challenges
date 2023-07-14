import css from './App.module.css';
import FunctionalSidebar from './components/Sidebar';
import NavBarForm from './components/NavBarForm';
import Content from './components/Content';

function App() {
  return (
    <div className={css.App}>
      {<NavBarForm />}
      {<FunctionalSidebar />}
      {<Content />}
    </div>
  );
}

export default App;