import RadioButtonsGroup from "../RadioButtonsGroup/RadioButtonsGroup";

const Legend = ({ items = [], updateStoragePrice }) => {
  return (
    <ul className="legend">
      {items.map(({ name, icon, options }, idx) => (
        <li className="legend-item" key={name}>
          <div>
            <p className="legend-item-name">{name}</p>
            {options && (
              <RadioButtonsGroup
                options={options}
                onChange={(e) =>
                  updateStoragePrice(Number(e.target.value), name)
                }
                defaultValue={idx > 1 ? options[1].value : options[0].value}
              />
            )}
          </div>
          <span className="legend-item-imgbox">
            <img className="legend-item-img" src={icon} alt={name} />
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Legend;
