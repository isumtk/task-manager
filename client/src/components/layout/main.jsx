import Items from "../../static/navbar-items";
import NavbarItem from "../navbar-item";

const MainLayout = (props) => {
  const { active, children } = props;
  const openAddTask = () => {};
  return (
    <main className="main-layout-container">
      <nav className="main-nav">
        <div className="flex w-full items-center justify-between">
          <div className="main-logo">
            <h1 className="main-logo-text">task manager</h1>
          </div>
          <ul className="flex items-center">
            <NavbarItem
              title={"add task"}
              icon={"/icons/add.svg"}
              iconAlt={"/icons/add.svg"}
              onClick={openAddTask}
            />
            {Items.map((object, idx) => (
              <NavbarItem
                {...object}
                key={idx}
                isActive={active === object.title}
              />
            ))}
          </ul>
        </div>
      </nav>
      <div className="main-body">
        <div className="main-content">{children}</div>
      </div>
    </main>
  );
};

export default MainLayout;
