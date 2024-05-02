import { useRegions } from "medusa-react"
import StoreContext from "../../context/StoreContext";
import { useContext } from "react";

const RegionSwitch = () => {

    const { regions, isLoading, isError } = useRegions();
    const { setRegion } = useContext(StoreContext)

    console.log("Region", regions);



    return (
        <>
            <select onChange={(e) => setRegion(e.target.value)}>
                {regions.map((region) => {
                    return <option key={region.name} value={region}> {region.name}</option>
                })}
            </select>
        </>
    )


}

export default RegionSwitch