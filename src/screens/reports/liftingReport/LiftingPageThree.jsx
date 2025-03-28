import ImageSection from "../imageSection.jsx";
import PdfBottom from "../pdfBottom.jsx";
import ViewComments from "../../../components/viewComments/viewComments.jsx";

const LiftingPageThree = ({ data }) => {
    return (
        <div className="mx-6 mt-5 mb-6">
            <ViewComments data={data?.comments} label="Comments" />
            {data?.images?.length > 0 && <ImageSection data={data?.images} />}
            <PdfBottom data={data} />
        </div>
    )
}

export default LiftingPageThree;