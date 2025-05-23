import PDFCoverImage from "../../assets/pdf_cover.jpg";
import BannerCard from "../../assets/banner.jpg";
import TableWithHeader from "../../components/pdfComponents/coverPageTable.jsx";
import LogoImage from "../../assets/logo.png";
import DocumentSpacer from "../../components/spacer/index.jsx";

const PageOne = ({data}) => {
    return (
        <div>
            <img src={PDFCoverImage} alt="" className="pdf-image"/>
            <img src={BannerCard} alt="" className="banner-image"/>
            <DocumentSpacer name={"page-one-bannerBottom"} defaultValue={15}/>
            <TableWithHeader data={data}/>
            <DocumentSpacer name={"page-one-coverBottom"} defaultValue={25}/>
            <div className="cover-bottom">
                <div className="cover-bottom-header w-[100%] h-[8px]"></div>
                <div className="cover-bottom-content px-3 flex items-center">
                    <img src={LogoImage} className="pdf-logo" alt=""/>
                    <div className="ml-12 flex justify-evenly w-[100%]">
                        <p className="text-white text-[13px]">Integrity Management</p>
                        <p className="text-white text-[13px]">NDT Inspection</p>
                        <p className="text-white text-[13px]">OCTG Inspection</p>
                        <p className="text-white text-[13px]">Lifting Inspection</p>
                        <p className="text-white text-[13px]">Factory Inspection</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageOne;