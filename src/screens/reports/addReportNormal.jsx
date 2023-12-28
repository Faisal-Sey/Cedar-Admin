import {FiTrash2} from "react-icons/fi";
import {consumablesInitial, emptyAssetsDetails, emptyDimensionDetails, equipmentsInitial} from "../../utils/data.js";
import {IoMdAddCircleOutline} from "react-icons/io";
import ResponsibilityTable from "../../components/invoices/tableA.jsx";
import MultiSelect from "../../components/multiSelect/index.jsx";
import FileUploadComponent from "../../components/imagesSelect/index.jsx";


const AddReportNormal = ({
                             handleChange,
                             issuerInfo,
                             setIssuerInfo,
                             reviewerInfo,
                             setReviewrInfo,
                             assetDetails,
                             handleTableItemChange,
                             setAssetsDetails,
                             handleRemoveTableItems,
                             handleAddTableItem,
                             showSections,
                             setShowSections,
                             dimensionOneDetails,
                             setDimensionOneDetails,
                             bodyDetails,
                             setBodyDetails,
                             dimensionTwoDetails,
                             setDimensionTwoDetails,
                             bladeDetails,
                             setBladeDetails,
                             reportTypeData,
                             setReportTypeData,
                             consumablesData,
                             setConsumablesData,
                             equipmentsData,
                             setEquipmentsData,
                             selectedOptions,
                             handleMultiSelectChange,
                             handleFilesSelect
                         }) => {
    const keyItems = [
        "ACP - Accept",
        "MPI - Magnetic Particle Inspection",
        "VT - Visual Inspection",
        "DPI - Dye Penetrant Inspection",
        "DIM - Dimensional",
        "PT - Pitted Thread",
        "GT - Galled Thread",
        "SD - Seal Damaged",
    ];

    return (
        <>
            <h3 className="font-bold mb-4">Client Details</h3>
            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Client Name */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Client Name:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Client Name"
                        name="client_name"
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Client Address */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Client
                        Address:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Client Address"
                        name="client_address"
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Client City */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Client City:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Client City"
                        name="client_city"
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Client Country */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Client
                        Country:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Client Country"
                        name="client_country"
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Examination Location */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Examination
                        Location:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Examination Location"
                        name="examination_location"
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <h3 className="font-bold mb-4">Job Details</h3>
            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Contract */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Contract:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Contract"
                        name="contract"
                        onChange={handleChange}
                    />
                </div>

                {/* Work Order */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Work Order:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Work Order"
                        name="work_order"
                        onChange={handleChange}
                    />
                </div>

                {/* Purchase Order */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Purchase
                        Order:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Purchase Order"
                        name="purchase_order"
                        onChange={handleChange}
                    />
                </div>

                {/* Client Job Reference */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Client Job
                        Reference:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Client Job Reference"
                        name="client_job_reference"
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Rig */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Rig:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Rig"
                        name="rig"
                        onChange={handleChange}
                    />
                </div>
            </div>

            <h3 className="font-bold mb-4">Report Details</h3>
            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Report Number */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Report Number:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Report Number"
                        name="report_number"
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Date of examination */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Date of
                        examination:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="date"
                        placeholder="Date of examination"
                        name="examination_date"
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Date of Next Examination */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Date of Next
                        Examination:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="date"
                        placeholder="Date of Next Examination"
                        name="next_examination_date"
                        onChange={handleChange}
                    />
                </div>

                {/* Area of Examination */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Area of
                        Examination:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Area of Examination"
                        name="examination_area"
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Services */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Services:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Services"
                        name="services"
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Standards */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Standards:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Standards"
                        name="standards"
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Local Procedure Number */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Local Procedure
                        Number:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Local Procedure Number"
                        name="local_procedure_number"
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Drawing Number */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Drawing
                        Number:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Drawing Number"
                        name="drawing_number"
                        onChange={handleChange}
                    />
                </div>

                {/* Test Restrictions */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Test
                        Restrictions:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Test Restrictions"
                        name="test_restrictions"
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Surface Condition */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Surface
                        Condition:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Surface Condition"
                        name="surface_condition"
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Report Status */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Report Status:</label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="report_status"
                        onChange={handleChange}
                        required
                    >
                        <option>Select a report status</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                </div>
            </div>

            <h3 className="font-bold mb-4">Inspected by</h3>
            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Issuer name */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Inspector name:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Inspector"
                        name="name"
                        onChange={(e) => handleChange(e, issuerInfo, setIssuerInfo)}
                        required
                    />
                </div>

                {/* Issue date */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Inspection date:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="date"
                        placeholder="Inspection date"
                        name="date"
                        onChange={(e) => handleChange(e, issuerInfo, setIssuerInfo)}
                        required
                    />
                </div>

                {/* Issuer qualification */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">
                        Inspector qualification</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Inspector qualification"
                        name="qualification"
                        onChange={(e) => handleChange(e, issuerInfo, setIssuerInfo)}
                        required
                    />
                </div>

            </div>

            <h3 className="font-bold mb-4">Reviewed by</h3>
            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Reviewed name */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">
                        Reviewer name:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Reviewer name"
                        name="name"
                        onChange={(e) => handleChange(e, reviewerInfo, setReviewrInfo)}
                        required
                    />
                </div>

                {/* Review date */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Review date:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="date"
                        placeholder="Review date"
                        name="date"
                        onChange={(e) => handleChange(e, reviewerInfo, setReviewrInfo)}
                        required
                    />
                </div>

                {/* Reviewer qualification */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">
                        Reviewer qualification</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Reviewer qualification"
                        name="qualification"
                        onChange={(e) => handleChange(e, reviewerInfo, setReviewrInfo)}
                        required
                    />
                </div>
            </div>

            {/* Asset Details */}
            <div className="mb-4">
                <label className="block text-gray-700 text-md font-bold mb-2">Assets Details:</label>
                <table className="w-full border">
                    <thead>
                    <tr>
                        <th className="border p-2">Type</th>
                        <th className="border p-2">Serial Number</th>
                        <th className="border p-2">Model</th>
                        <th className="border p-2">Description</th>
                        <th className="border p-2">Size</th>
                        <th className="border p-2">Material</th>
                        <th className="border p-2"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {assetDetails?.map((asset, index) => (
                        <tr key={index}>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Type"
                                    value={asset.type}
                                    required
                                    onChange={(e) =>
                                        handleTableItemChange(
                                            index,
                                            'type',
                                            e.target.value,
                                            assetDetails,
                                            setAssetsDetails
                                        )}
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Serial Number"
                                    value={asset.serial_number}
                                    required
                                    onChange={(e) =>
                                        handleTableItemChange(
                                            index,
                                            'serial_number',
                                            e.target.value,
                                            assetDetails,
                                            setAssetsDetails
                                        )}
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Model"
                                    value={asset.model}
                                    onChange={(e) =>
                                        handleTableItemChange(
                                            index,
                                            'model',
                                            e.target.value,
                                            assetDetails,
                                            setAssetsDetails
                                        )
                                    }
                                    required
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Description"
                                    value={asset.description}
                                    onChange={(e) =>
                                        handleTableItemChange(
                                            index,
                                            'description',
                                            e.target.value,
                                            assetDetails,
                                            setAssetsDetails
                                        )
                                    }
                                    required
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Size"
                                    value={asset.size}
                                    onChange={(e) =>
                                        handleTableItemChange(
                                            index,
                                            'size',
                                            e.target.value,
                                            assetDetails,
                                            setAssetsDetails
                                        )
                                    }
                                    required
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Material"
                                    value={asset.material}
                                    onChange={(e) =>
                                        handleTableItemChange(
                                            index,
                                            'material',
                                            e.target.value,
                                            assetDetails,
                                            setAssetsDetails
                                        )
                                    }
                                    required
                                />
                            </td>
                            <td className="border p-2">
                                <button
                                    type="button"
                                    className="remove-btn rounded p-1"
                                    onClick={() =>
                                        handleRemoveTableItems(
                                            index,
                                            assetDetails,
                                            setAssetsDetails
                                        )
                                    }
                                >
                                    <FiTrash2/>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <button
                    type="button"
                    className="add-item-btn text-white rounded px-2 py-1"
                    onClick={() =>
                        handleAddTableItem(
                            setAssetsDetails,
                            assetDetails,
                            emptyAssetsDetails
                        )
                    }
                >
                    <IoMdAddCircleOutline/>
                </button>
            </div>

            <div className="mb-4 flex items-center justify-start">
                <div>
                    <p className="text-left">Select Dimension Details to show</p>
                </div>
                <div className="ml-12">
                    <input
                        type="checkbox"
                        className='mr-2'
                        checked={showSections.dimensionOne}
                        onClick={() => setShowSections({
                            ...showSections,
                            dimensionOne: !showSections.dimensionOne
                        })}
                    />
                    <label>Dimension 1 Details</label>
                </div>
                <div className="ml-12">
                    <input
                        type="checkbox"
                        className='mr-2'
                        checked={showSections.dimensionTwo}
                        onClick={() => setShowSections({
                            ...showSections,
                            dimensionTwo: !showSections.dimensionTwo
                        })}
                    />
                    <label>Dimension 2 Details</label>
                </div>
            </div>

            {/* Dimension 1 Details */}
            {showSections.dimensionOne && <div className="mb-4">
                <label className="block text-gray-700 text-md font-bold mb-2">Dimension 1:</label>
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Type:</label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="dimension_one_name"
                        onChange={handleChange}
                        required
                    >
                        <option>Select a type</option>
                        <option value="Box">Box</option>
                        <option value="Pin">Pin</option>
                    </select>
                </div>
                <table className="w-full border">
                    <thead>
                    <tr>
                        <th className="border p-2">Property</th>
                        <th className="border p-2">Value</th>
                        <th className="border p-2"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {dimensionOneDetails?.map((dimension, index) => (
                        <tr key={index}>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Property"
                                    value={dimension.property}
                                    required
                                    onChange={(e) =>
                                        handleTableItemChange(
                                            index,
                                            'property',
                                            e.target.value,
                                            assetDetails,
                                            setAssetsDetails
                                        )}
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Value"
                                    value={dimension.value}
                                    required
                                    onChange={(e) =>
                                        handleTableItemChange(
                                            index,
                                            'value',
                                            e.target.value,
                                            assetDetails,
                                            setAssetsDetails
                                        )}
                                />
                            </td>
                            <td className="border p-2">
                                <button
                                    type="button"
                                    className="remove-btn rounded p-1"
                                    onClick={() =>
                                        handleRemoveTableItems(
                                            index,
                                            dimensionOneDetails,
                                            setDimensionOneDetails
                                        )}
                                >
                                    <FiTrash2/>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <button
                    type="button"
                    className="add-item-btn text-white rounded px-2 py-1"
                    onClick={() =>
                        handleAddTableItem(
                            setDimensionOneDetails,
                            dimensionOneDetails,
                            emptyDimensionDetails
                        )
                    }
                >
                    <IoMdAddCircleOutline/>
                </button>
            </div>}

            {/* Dimension 2 Details */}
            {showSections.dimensionTwo && <div className="mb-10">
                <label className="block text-gray-700 text-md font-bold mb-2">Dimension 2:</label>
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Type:</label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="dimension_two_name"
                        onChange={handleChange}
                        required
                    >
                        <option>Select a type</option>
                        <option value="Box">Box</option>
                        <option value="Pin">Pin</option>
                    </select>
                </div>
                <table className="w-full border">
                    <thead>
                    <tr>
                        <th className="border p-2">Property</th>
                        <th className="border p-2">Value</th>
                        <th className="border p-2"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {dimensionTwoDetails?.map((dimension, index) => (
                        <tr key={index}>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Property"
                                    value={dimension.property}
                                    required
                                    onChange={(e) =>
                                        handleTableItemChange(
                                            index,
                                            'property',
                                            e.target.value,
                                            assetDetails,
                                            setAssetsDetails
                                        )}/>
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Value"
                                    value={dimension.value}
                                    required
                                    onChange={(e) =>
                                        handleTableItemChange(
                                            index,
                                            'value',
                                            e.target.value,
                                            assetDetails,
                                            setAssetsDetails
                                        )}/>
                            </td>
                            <td className="border p-2">
                                <button
                                    type="button"
                                    className="remove-btn rounded p-1"
                                    onClick={() =>
                                        handleRemoveTableItems(
                                            index,
                                            dimensionTwoDetails,
                                            setDimensionTwoDetails
                                        )}
                                >
                                    <FiTrash2/>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <button
                    type="button"
                    className="add-item-btn text-white rounded px-2 py-1"
                    onClick={() =>
                        handleAddTableItem(
                            setDimensionTwoDetails,
                            dimensionTwoDetails,
                            emptyDimensionDetails
                        )
                    }
                >
                    <IoMdAddCircleOutline/>
                </button>
            </div>}

            <h3 className="font-bold mb-4">Body / Blade Details</h3>
            <div className="mb-4 flex items-center justify-start">
                <div>
                    <p className="text-left">Select Sections to show</p>
                </div>
                <div className="ml-12">
                    <input
                        type="checkbox"
                        className='mr-2'
                        checked={showSections.bodyDetails}
                        onClick={() => setShowSections({
                            ...showSections,
                            bodyDetails: !showSections.bodyDetails
                        })}
                    />
                    <label>Body Details</label>
                </div>
                <div className="ml-12">
                    <input
                        type="checkbox"
                        className='mr-2'
                        checked={showSections.bladeDetails}
                        onClick={() => setShowSections({
                            ...showSections,
                            bladeDetails: !showSections.bladeDetails
                        })}
                    />
                    <label>Blade Details</label>
                </div>
            </div>

            {/* Body Details */}
            {showSections.bodyDetails === true && <div className="mb-4">
                <label className="block text-gray-700 text-md font-bold mb-2">Body Details</label>
                <table className="w-full border">
                    <thead>
                    <tr>
                        <th className="border p-2">Property</th>
                        <th className="border p-2">Value</th>
                        <th className="border p-2"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {bodyDetails?.map((dimension, index) => (
                        <tr key={index}>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Property"
                                    value={dimension.property}
                                    required
                                    onChange={(e) =>
                                        handleTableItemChange(
                                            index,
                                            'property',
                                            e.target.value,
                                            assetDetails,
                                            setAssetsDetails
                                        )}/>
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Value"
                                    value={dimension.value}
                                    required
                                    onChange={(e) =>
                                        handleTableItemChange(
                                            index,
                                            'value',
                                            e.target.value,
                                            assetDetails,
                                            setAssetsDetails
                                        )}/>
                            </td>
                            <td className="border p-2">
                                <button
                                    type="button"
                                    className="remove-btn rounded p-1"
                                    onClick={() =>
                                        handleRemoveTableItems(
                                            index,
                                            bodyDetails,
                                            setBodyDetails
                                        )}
                                >
                                    <FiTrash2/>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <button
                    type="button"
                    className="add-item-btn text-white rounded px-2 py-1"
                    onClick={() =>
                        handleAddTableItem(
                            setDimensionTwoDetails,
                            dimensionTwoDetails,
                            emptyDimensionDetails
                        )
                    }
                >
                    <IoMdAddCircleOutline/>
                </button>
            </div>}

            {/* Blade Details */}
            {showSections.bladeDetails === true &&
                <div className="mb-4">
                    <label className="block text-gray-700 text-md font-bold mb-2">Blade Details</label>
                    <table className="w-full border">
                        <thead>
                        <tr>
                            <th className="border p-2">Property</th>
                            <th className="border p-2">Value</th>
                            <th className="border p-2"></th>
                        </tr>
                        </thead>
                        <tbody>
                        {bladeDetails?.map((dimension, index) => (
                            <tr key={index}>
                                <td className="border p-2">
                                    <input
                                        type="text"
                                        className="w-full p-1"
                                        placeholder="Property"
                                        value={dimension.property}
                                        required
                                        onChange={(e) =>
                                            handleTableItemChange(
                                                index,
                                                'property',
                                                e.target.value,
                                                assetDetails,
                                                setAssetsDetails
                                            )}/>
                                </td>
                                <td className="border p-2">
                                    <input
                                        type="text"
                                        className="w-full p-1"
                                        placeholder="Value"
                                        value={dimension.value}
                                        required
                                        onChange={(e) =>
                                            handleTableItemChange(
                                                index,
                                                'value',
                                                e.target.value,
                                                assetDetails,
                                                setAssetsDetails
                                            )}/>
                                </td>
                                <td className="border p-2">
                                    <button
                                        type="button"
                                        className="remove-btn rounded p-1"
                                        onClick={() =>
                                            handleRemoveTableItems(
                                                index,
                                                bladeDetails,
                                                setBladeDetails
                                            )}
                                    >
                                        <FiTrash2/>
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <button
                        type="button"
                        className="add-item-btn text-white rounded px-2 py-1"
                        onClick={() =>
                            handleAddTableItem(
                                setDimensionTwoDetails,
                                dimensionTwoDetails,
                                emptyDimensionDetails
                            )
                        }
                    >
                        <IoMdAddCircleOutline/>
                    </button>
                </div>}

            {/* Visual */}
            <div className="mb-10">
                <label className="block text-gray-700 text-md font-bold mb-2">Visual:</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Visual"
                    name="visual"
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Report Type Data */}
            <div className="mb-4">
                <label className="block text-gray-700 text-md font-bold mb-2">Report Type Data</label>
                <table className="w-full border">
                    <thead>
                    <tr>
                        <th className="border p-2">Title</th>
                        <th className="border p-2">Value</th>
                        <th className="border p-2"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {reportTypeData?.map((dimension, index) => (
                        <tr key={index}>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Property"
                                    value={dimension.property}
                                    required
                                    onChange={(e) =>
                                        handleTableItemChange(
                                            index,
                                            'property',
                                            e.target.value,
                                            reportTypeData,
                                            setReportTypeData
                                        )}/>
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Value"
                                    value={dimension.value}
                                    required
                                    onChange={(e) =>
                                        handleTableItemChange(
                                            index,
                                            'value',
                                            e.target.value,
                                            reportTypeData,
                                            setReportTypeData
                                        )}/>
                            </td>
                            <td className="border p-2">
                                <button
                                    type="button"
                                    className="remove-btn rounded p-1"
                                    onClick={() =>
                                        handleRemoveTableItems(
                                            index,
                                            bodyDetails,
                                            setReportTypeData
                                        )}
                                >
                                    <FiTrash2/>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Consumables */}
            <div className="mb-4">
                <label className="block text-gray-700 text-md font-bold mb-2">Consumables</label>
                <ResponsibilityTable
                    column1="Responsibilities"
                    initalItems={consumablesInitial}
                    responsibilities={consumablesData}
                    setResponsibilities={setConsumablesData}
                />
            </div>

            {/* Equipments */}
            <div className="mb-4">
                <label className="block text-gray-700 text-md font-bold mb-2">Equipments</label>
                <ResponsibilityTable
                    column1="Responsibilities"
                    initalItems={equipmentsInitial}
                    responsibilities={equipmentsData}
                    setResponsibilities={setEquipmentsData}
                />
            </div>

            {/* Inspector's Comment */}
            <div className="mb-3">
                <label className="block text-gray-700 text-md font-bold mb-2">Inspector&apos;s Comment:</label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Inspector's Comment"
                    name="comments"
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Keys */}
            <div className="mb-3">
                <label className="block text-gray-700 text-md font-bold mb-2">Key</label>
                <MultiSelect
                    options={keyItems}
                    selectedOptions={selectedOptions}
                    onChange={handleMultiSelectChange}
                />
            </div>

            {/* Images */}
            <div className="mb-3">
                <label className="block text-gray-700 text-md font-bold mb-2">Images</label>
                <FileUploadComponent setImages={handleFilesSelect}/>
            </div>
        </>
    )
}

export default AddReportNormal;