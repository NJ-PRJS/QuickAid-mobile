import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DefaultLanguage {
    language: string | null;
}

interface QuickAidContextType {
    defaultLanguage: DefaultLanguage | null;
    setDefaultLanguage: (language: DefaultLanguage | null) => void;
}

const QuickAidContext = createContext<QuickAidContextType | undefined>(undefined);

export const useQuickAidContext = (): QuickAidContextType => {
    const context = useContext(QuickAidContext);
    if (context === undefined) {
        throw new Error('useQuickAidContext must be used within a Provider');
    }

    return context;
}

interface QuickAidProviderProps {
    children: ReactNode;
}

export const QuickAidProvider: React.FunctionComponent<QuickAidProviderProps> = ({ children }) => {
    const [defaultLanguage, setDefaultLanguage] = useState<DefaultLanguage | null>({ language: "ENGLISH" });

    return (
        <QuickAidContext.Provider value={{ defaultLanguage, setDefaultLanguage }}>
            {children}
        </QuickAidContext.Provider>
    );
};


