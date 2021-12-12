import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../GLobal/rootReducer";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
