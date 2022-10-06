import { ChangeEvent, FC, useMemo, useState, memo, useRef } from "react";
import useOnClickOutside from "../hooks/useClickOutside";
import useDebounce from "../hooks/useDebounce";
import { IHub } from "../models/models";
import RadioButton from "./Forms/RadioButton";
import Picture from "./Picture";

const Search: FC<{ data: any[] | undefined }> = ({ data }) => {
    const [search, setSearch] = useState("");
    const [chosedData, setChosedData] = useState<IHub | null>(null);
    const debouncedSearch = useDebounce(search);

    const [show, setShow] = useState<boolean>(false);
    const resultRef = useRef(null);
    useOnClickOutside(resultRef, () => setShow(false));

    const onHandleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const searchedItems = useMemo(() => {
        const res = data
            ?.filter(({ title }) => title.toLowerCase().includes(debouncedSearch.toLowerCase()))
            .map((item, i) => (
                <li key={item.title + i} onClick={() => setChosedData(item)} className="input-form__item">
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
            <div className="top__input input-form _icon-search">
                <input
                    autoComplete="off"
                    name="searchHub"
                    placeholder="Search your hub.."
                    type="text"
                    className="input-form__input input"
                    onChange={onHandleInput}
                />
                <ul ref={resultRef} className={`input-form__search ${show ? "_active" : ""}`}>
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

export default memo(Search);
