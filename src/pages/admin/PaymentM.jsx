import React, { useState } from "react";
import { Plus, Edit2, X, Check } from "lucide-react";
import { TransactionHistory } from "@/pages/pagecomponents/Admin/TransactionHistory";

export const PaymentM = () => {
  const [activeTab, setActiveTab] = useState("pricing");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPackage, setEditingPackage] = useState(null);
  const [editPrice, setEditPrice] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newPrice, setNewPrice] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [singlePackages, setSinglePackages] = useState([
    {
      id: 1,
      price: "£10",
      title: "Diagnostic/Root Cause Report",
      description: "",
    },
    {
      id: 2,
      price: "£20",
      title: "Executive + KPI Blueprint",
      description: "",
    },
    {
      id: 3,
      price: "£25",
      title: "Full Triage Pack (Recommended)",
      description: "",
    },
  ]);

  // Multi-Pack Data
  const [multiPackages, setMultiPackages] = useState([
    {
      id: 1,
      price: "£115",
      quantity: "5",
      description: "5 × Full Triage Packs",
      casePrice: "(£23/case)",
    },
    {
      id: 2,
      price: "£220",
      quantity: "10",
      description: "10 × Full Triage Packs",
      casePrice: "(£22/case)",
    },
    {
      id: 3,
      price: "£400",
      quantity: "20",
      description: "20 × Full Triage Packs",
      casePrice: "(£20/case)",
    },
  ]);

  // Handle Edit - Open Modal
  const handleEdit = (pkg, isMulti = false) => {
    setEditingPackage({ ...pkg, isMulti });
    setEditPrice(pkg.price.replace("£", ""));
    setIsModalOpen(true);
  };

  // Handle Save - Update Price
  const handleSave = () => {
    const newPrice = `£${editPrice}`;
    
    if (editingPackage.isMulti) {
      setMultiPackages(
        multiPackages.map((pkg) =>
          pkg.id === editingPackage.id ? { ...pkg, price: newPrice } : pkg
        )
      );
    } else {
      setSinglePackages(
        singlePackages.map((pkg) =>
          pkg.id === editingPackage.id ? { ...pkg, price: newPrice } : pkg
        )
      );
    }

    // Show success message
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setIsModalOpen(false);
    }, 2000);
  };

  // Handle Add New Pack
  const handleAddNewPack = () => {
    setNewPrice("");
    setNewTitle("");
    setIsAddModalOpen(true);
  };

  // Handle Save New Pack
  const handleSaveNewPack = () => {
    const newPack = {
      id: singlePackages.length + 1,
      price: `£${newPrice}`,
      title: newTitle,
      description: "",
    };
    setSinglePackages([...singlePackages, newPack]);
    setIsAddModalOpen(false);
  };

  // Render Single Pack Card
  const renderSingleCard = (pkg) => (
    <div
      key={pkg.id}
      className="border-2 border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800"
    >
      <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        {pkg.price}
      </div>
      <p className="text-gray-700 dark:text-gray-300 text-sm mb-6 font-medium">
        {pkg.title}
      </p>
      <button
        onClick={() => handleEdit(pkg)}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
      >
        <Edit2 className="w-4 h-4" />
        Edit
      </button>
    </div>
  );

  // Render Multi-Pack Card
  const renderMultiCard = (pkg) => (
    <div
      key={pkg.id}
      className="border-2 border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800"
    >
      <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">
        {pkg.price}
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-xs mb-2">
        {pkg.casePrice}
      </p>
      <p className="text-gray-700 dark:text-gray-300 text-sm mb-6 font-medium">
        {pkg.description}
      </p>
      <button
        onClick={() => handleEdit(pkg, true)}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
      >
        <Edit2 className="w-4 h-4" />
        Edit
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 sm:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with Tabs */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab("pricing")}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                activeTab === "pricing"
                  ? "bg-orange-500 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
              }`}
            >
              Pricing
            </button>
            <button
              onClick={() => setActiveTab("history")}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                activeTab === "history"
                  ? "bg-orange-500 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
              }`}
            >
              History
            </button>
          </div>

          <button
            onClick={handleAddNewPack}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add New Pack
          </button>
        </div>

        {/* Pricing Tab Content */}
        {activeTab === "pricing" && (
          <div className="space-y-10">
            {/* Pricing & Packs Overview */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Pricing & Packs Overview
              </h2>
            </div>

            {/* Single Purchase Section */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-6">
                Single Purchase Section
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {singlePackages.map(renderSingleCard)}
              </div>
            </div>

            {/* Multi-Packs Section */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-6">
                MULTI-PACKS (Full Triage Packs only)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {multiPackages.map(renderMultiCard)}
              </div>
            </div>
          </div>
        )}

        {/* History Tab Content */}
        {activeTab === "history" && (
          <TransactionHistory />
        )}
      </div>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 w-full max-w-md shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Edit Price
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Package Info */}
            <div className="mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Package:</p>
              <p className="text-gray-900 dark:text-gray-100 font-semibold">
                {editingPackage?.title || editingPackage?.description}
              </p>
            </div>

            {/* Price Input */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                New Price
              </label>
              <div className="flex items-center gap-2">
                <span className="text-gray-600 dark:text-gray-400 text-lg font-semibold">£</span>
                <input
                  type="number"
                  value={editPrice}
                  onChange={(e) => setEditPrice(e.target.value)}
                  placeholder="Enter price"
                  className="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Success Message */}
            {showSuccess && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span className="text-green-700 dark:text-green-400 font-semibold text-sm">
                  Price updated successfully!
                </span>
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={showSuccess}
                className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add New Pack Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 w-full max-w-md shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Add New Pack
              </h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Price
              </label>
              <div className="flex items-center gap-2">
                <span className="text-gray-600 dark:text-gray-400 text-lg">£</span>
                <input
                  type="number"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                  placeholder="Enter price"
                  className="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Title
              </label>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Enter pack title"
                className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveNewPack}
                className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
              >
                Add Pack
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};