const MainLayout = ({ children }) => {
  return (
    <div>
      {/* Header */}
      <header>
        <h1>My App</h1>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
