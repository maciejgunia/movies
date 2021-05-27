import { FC } from "react";
import "./Sticker.scss";

const Sticker: FC = ({ children }) => {
    return <div className="sticker">{children}</div>;
};

export default Sticker;
