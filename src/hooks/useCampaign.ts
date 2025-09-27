'use client';
import React, { createContext, useContext, useReducer, ReactNode, Dispatch } from 'react';
import { CampaignData, StepperState } from '@/types/campaign';

type CampaignAction = 
  | { type: 'UPDATE_CAMPAIGN_DATA'; payload: Partial<CampaignData> }
  | { type: 'SET_STEP'; payload: number }
  | { type: 'COMPLETE_STEP'; payload: number };

const initialState: StepperState = {
  currentStep: 1,
  completedSteps: [],
  campaignData: {}
};

function campaignReducer(state: StepperState, action: CampaignAction): StepperState {
  switch (action.type) {
    case 'UPDATE_CAMPAIGN_DATA':
      return {
        ...state,
        campaignData: { ...state.campaignData, ...action.payload }
      };
    case 'SET_STEP':
      return { ...state, currentStep: action.payload };
    case 'COMPLETE_STEP':
      return {
        ...state,
        completedSteps: [...new Set([...state.completedSteps, action.payload])],
      };
    default:
      return state;
  }
}

interface CampaignContextType {
  state: StepperState;
  dispatch: Dispatch<CampaignAction>;
}

const CampaignContext = createContext<CampaignContextType | null>(null);

export function CampaignProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(campaignReducer, initialState);
  
  return React.createElement(
    CampaignContext.Provider,
    { value: { state, dispatch } },
    children
  );
}

export function useCampaign(): CampaignContextType {
  const context = useContext(CampaignContext);
  if (!context) {
    throw new Error('useCampaign must be used within CampaignProvider');
  }
  return context;
}
