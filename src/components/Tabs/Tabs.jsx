export const Tabs = ({ tab, select, setSelect }) => {
  const handleClick = () => {
    setSelect(tab);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <li
      onClick={handleClick}
      className={select === tab ? 'is-active' : ''}
      data-cy="Tab"
    >
      <a href="#tab-1" data-cy="TabLink">
        {tab.title}
      </a>
    </li>
  );
};
