import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SurveyPage } from "@/components/Shared/Survey";

const CATEGORY_MAP = {
  1: "Operational Delivery",
  2: "Commercial Strategy",
  3: "Supply Chain",
  4: "Operational HR",
  5: "Performance & KPIs",
  6: "Data & Technology",
  7: "Helpdesk",
  8: "Service Delivery",
  9: "Client Servicessss",
};

export const Survey = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const title = CATEGORY_MAP[id] || "Category";

  return <SurveyPage title={title} onBack={() => navigate(-1)} />;
};

export default Survey;
