import { createContext } from "react";


export const AppContext = createContext();

const AppContextProvider = (props) => {

    const currency = '₹';

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    // Function to format the date eg. ( 20_01_2000 => 20 Jan 2000 )
    const slotDateFormat = (slotDate) => {
        const dateArray = slotDate.split('_')
        return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
    }

    // Function to calculate the age eg. ( 20_01_2000 => 24 )
   const calculateAge = (dob) => {
        if (!dob) return "N/A";
        const [day, month, year] = dob.split("_");
        const birthDate = new Date(`${year}-${month}-${day}`);
        if (isNaN(birthDate)) return "N/A";
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        return age;
};

    const value = {
        currency,
        slotDateFormat,
        calculateAge,
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider