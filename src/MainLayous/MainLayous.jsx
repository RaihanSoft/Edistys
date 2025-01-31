import Banner from "../Components/Banner/Banner"
import FinanceSection from "../Components/FinanceSection/FinanceSection"
import PhilosophySection from "../Components/PhilosophySection/PhilosophySection"
import SolutionsSection from "../Components/SolutionsSection/SolutionsSection"

const MainLayous = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Banner />
            <FinanceSection />
            <PhilosophySection />
            <SolutionsSection />
        </div>
    )
}

export default MainLayous
