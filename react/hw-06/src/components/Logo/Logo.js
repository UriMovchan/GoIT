export const Logo = ({ isLoaded }) => (
  <div className="logo">
    <h1 className={`logo__text ${isLoaded ? "" : "start"}`}>Phonebook</h1>
  </div>
);
