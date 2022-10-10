import { ChangeEvent, FC, useMemo, useState, memo, useRef, useContext } from "react";
import useOnClickOutside from "../hooks/useClickOutside";
import useDebounce from "../hooks/useDebounce";
import { IHub } from "../models/models";
import { FormContext } from "./Form";
import RadioButton from "../_components/Forms/RadioButton";
import Picture from "../_components/Picture";

const HubSearch: FC<{ hubs: IHub[] | undefined }> = ({ hubs }) => {
    const [search, setSearch] = useState("");
    const [chosedData, setChosedData] = useState<IHub | null>(null);
    const debouncedSearch = useDebounce(search);

    const [show, setShow] = useState<boolean>(false);
    const resultRef = useRef(null);
    useOnClickOutside(resultRef, () => setShow(false));

    const onHandleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const { setFieldValue } = useContext(FormContext);

    const searchedItems = useMemo(() => {
        const onHandleAdd = (popular: boolean, item: IHub) => {
            if (popular) {
                setFieldValue("hub", item.title);
            } else {
                setChosedData(item);
            }
        };

        const res = hubs
            ?.filter(({ title }) => title.toLowerCase().includes(debouncedSearch.toLowerCase()))
            .map((item, i) => (
                <li
                    key={item.title + i}
                    onClick={() => onHandleAdd(item.popular, item)}
                    onKeyDown={(e) => e.key === "Enter" && onHandleAdd(item.popular, item)}
                    className="input-form__item"
                    tabIndex={0}
                >
                    {item.title}
                </li>
            ));
        if (debouncedSearch.length > 0) {
            setShow(true);
        }
        return res;
    }, [debouncedSearch]);

    return (
        <>
            <div ref={resultRef} className="top__input input-form _icon-search">
                <input
                    autoComplete="off"
                    name="searchHub"
                    placeholder="Search your hub.."
                    type="text"
                    className="input-form__input input"
                    onChange={onHandleInput}
                />
                <ul className={`input-form__search ${show ? "_active" : ""}`}>
                    {searchedItems && searchedItems?.length > 0 ? (
                        searchedItems
                    ) : (
                        <li className="input-form__empty">No such Hub</li>
                    )}
                </ul>
            </div>
            {chosedData && !chosedData.popular && (
                <RadioButton className="top__chosed" name="hub" value={chosedData?.title}>
                    <span className="option__text">{chosedData?.title}</span>
                    <div className="option__img">
                        <Picture
                            srcWebp={chosedData?.webp || chosedData?.img}
                            fallbackSrc={chosedData?.img}
                            alt={chosedData?.title}
                        />
                    </div>
                </RadioButton>
            )}
        </>
    );
};

export default memo(HubSearch);
