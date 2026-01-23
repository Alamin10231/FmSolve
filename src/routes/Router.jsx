import React from "react";
import { Register } from "../pages/auth/Register";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../pages/landing/Home";
import Login from "../pages/auth/Login";
import { ForgetPassword } from "../pages/auth/ForgetPassword";
import { VerifyEmail } from "../pages/auth/VerifyEmail";
// import UpdatedPassword from "../pages/auth/UpdatedPassword";
import { LandingLayout } from "../components/layout/LandingLayout";
import { UserLayout } from "../components/layout/UserLayout";
import { Dashboard } from "../pages/user/Dashboard";
import Diagnostic from "../pages/user/Diagnostic";
import ScenarioDetail from "../pages/user/ScenarioDetail";
import ReportHistory from "../pages/user/ReportHistory";
import ReportView from "../pages/user/ReportView";
import { AdminLayout } from "../components/layout/AdminLayout";
import { Analystics } from "../pages/admin/Analystics";
import { Dashboard as AdminDashboard } from "@/pages/admin/Dashboard";
import { Credits } from "@/pages/admin/Credits";
import { PaymentM } from "@/pages/admin/PaymentM";
import { FmSolveId } from "@/pages/admin/FmSolveId";
import { FsIdDetailPage } from "@/pages/admin/FsIdDetailPage";
import { Security } from "@/pages/admin/Security";
import { Profile as AdminProfile } from "@/pages/admin/Profile";
import { Notifications } from "@/pages/admin/Notifications";
import { Survey } from "../pages/landing/Survey";
import AllServicepage from "@/pages/AllServicepage";
import MeetSam from "@/pages/MeetSam";
import OurStory from "@/pages/OurStory";
import Pricing from "@/pages/Pricing";
import Contact from "@/pages/Contact";
import FMNews from "@/pages/FMNews";
import Asksam from "@/pages/Asksam";
import AskSam from "@/pages/pagecomponents/AskSam/AskSam";
import FMAnswer from "@/components/Shared/FMAnswer";
import StabilityReports from "@/pages/pagecomponents/AskSam/StabilityReports";
import AssessmentReport from "@/pages/pagecomponents/AskSam/AssessmentReport";
import AskSamStaticResults from "@/pages/pagecomponents/AskSam/AskSamStaticResults";
import AskSamAnswerDetail from "@/pages/pagecomponents/AskSam/AskSamAnswerDetail";
import AskSamFullAnswer from "@/pages/pagecomponents/AskSam/AskSamFullAnswer";
import Profile from "@/pages/user/Profile";
import Setting from "@/pages/user/Setting";
import UserManagment from "@/pages/admin/UserManagment";

// jimport StabilityReports from "@/pages/pagecomponents/AskSam/StabilityReports";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* public pages  */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forget-password" element={<ForgetPassword />}></Route>
        <Route path="/verify-email" element={<VerifyEmail />}></Route>
        {/* <Route path="/updatedpassword" element={<UpdatedPassword />}></Route> */}

        {/* home landing page */}

        <Route element={<LandingLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/survey/:id" element={<Survey />}></Route>
          <Route path="/assessment" element={<AssessmentReport />}></Route>
          <Route path="/services/:id" element={<AllServicepage />}></Route>
          <Route path="/meet-sam" element={<MeetSam />}></Route>
          <Route path="/ourstory" element={<OurStory />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/fmnews" element={<FMNews />}></Route>
          <Route path="/ask-sam" element={<Asksam />} />
          <Route
            path="/ask-sam/asksam"
            element={<Navigate to="/ask-sam" replace />}
          />
          <Route path="/ask-sam/fm-answers" element={<FMAnswer />} />
          <Route path="/ask-sam/results" element={<AskSamStaticResults />} />
          <Route path="/ask-sam/answer" element={<AskSamAnswerDetail />} />
          <Route path="/ask-sam/answer/full" element={<AskSamFullAnswer />} />
          <Route
            path="/ask-sam/stability-reports"
            element={<StabilityReports />}
          />
          <Route
            path="/ask-sam/fm-answer"
            element={<Navigate to="/ask-sam/fm-answers" replace />}
          />
          <Route
            path="/ask-sam/stability-report"
            element={<Navigate to="/ask-sam/stability-reports" replace />}
          />
        </Route>

        {/* now it's useradmin layout */}
        <Route element={<UserLayout />}
        // element={
        //   <PrivateRoute>
        //     <UserLayout />
        //   </PrivateRoute>
        // }
        >
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/diagnostic" element={<Diagnostic />}></Route>
          <Route path="/diagnostic/:category" element={<Diagnostic />}></Route>
          <Route path="/setting" element={<Setting />}></Route>
          <Route
            path="/diagnostic/:category/:scenarioId"
            element={<ScenarioDetail />}
          ></Route>
          <Route path="/report" element={<ReportView />}></Route>
          <Route path="/reports" element={<ReportHistory />}></Route>
        </Route>

        {/* admin routes under AdminLayout (no role guard) */}
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />}></Route>
          <Route path="/admin/profile" element={<AdminProfile />}></Route>
          <Route
            path="/admin/notifications"
            element={<Notifications />}
          ></Route>
          <Route path="/admin/analystics" element={<Analystics />}></Route>
          <Route
            path="/admin/usermanagment"
            element={<UserManagment />}
          ></Route>
          <Route path="/admin/credits" element={<Credits />}></Route>
          <Route path="/admin/fmsolveid" element={<FmSolveId />}></Route>
          <Route
            path="/admin/fmsolveid/:id"
            element={<FsIdDetailPage />}
          ></Route>
          <Route path="/admin/payment" element={<PaymentM />}></Route>
          <Route path="/admin/security" element={<Security />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
