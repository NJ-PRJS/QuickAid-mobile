import React, { useState } from "react";
import { SearchBar } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import {CostomSearchBarStyles} from "../globalStyles/costomSearchBar";


type searchbar={
    placeholder:string
}
const CustomSearchBar = (props:searchbar) => {
    const [search, setSearch] = useState("");

    const updateSearch = (search:string) => {
        setSearch(search);
    };
    return (
        <View>
            <SearchBar
                placeholder={props.placeholder}
                onChangeText={updateSearch}
                value={search}
                inputStyle={CostomSearchBarStyles.inputStyle}
                inputContainerStyle={CostomSearchBarStyles.inputContainerStyle}
                containerStyle={CostomSearchBarStyles.containerStyle}
                lightTheme
                round
            />
        </View>
    );
};



export default CustomSearchBar;
