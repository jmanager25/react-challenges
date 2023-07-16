import css from './App.module.css';
import FunctionalSidebar from './components/Sidebar';
import NavBarForm from './components/NavBarForm';
import ContentHooks from './components/ContentHooks';

function App() {
  return (
    <div className={css.App}>
      {<NavBarForm />}
      {<FunctionalSidebar />}
      {<ContentHooks />}
    </div>
  );
}

export default App;