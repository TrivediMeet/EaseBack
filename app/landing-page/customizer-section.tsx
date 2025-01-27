"use client";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Palette, Type, Layout, MessageSquare } from 'lucide-react';
import CopyBtn from "@/components/copy-btn";

const CustomizerSection = () => {
  const [settings, setSettings] = useState({
    buttonText: "Share Feedback",
    primaryColor: "#000000",
    buttonRadius: "4",
    position: "bottom-right",
    showIcon: true,
    iconPosition: "left" // 'left' or 'right'
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const positions = [
    { id: "bottom-right", label: "Bottom Right" },
    { id: "bottom-left", label: "Bottom Left" },
    { id: "top-right", label: "Top Right" },
    { id: "top-left", label: "Top Left" }
  ];

  const generateCode = () => {
    return `<my-widget 
  button-text="${settings.buttonText}"
  primary-color="${settings.primaryColor}"
  button-radius="${settings.buttonRadius}"
  position="${settings.position}"
  show-icon="${settings.showIcon}"
  icon-position="${settings.iconPosition}"
></my-widget>`;
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Customize Your Widget</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Customization Controls */}
          <div className="space-y-6 bg-white/10 p-6 rounded-lg border">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Type className="mr-2" />
                Button Text
              </h3>
              <Input
                value={settings.buttonText}
                onChange={(e) => setSettings({ ...settings, buttonText: e.target.value })}
                placeholder="Enter button text"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Palette className="mr-2" />
                Primary Color
              </h3>
              <div className="flex gap-4">
                <Input
                  type="color"
                  value={settings.primaryColor}
                  onChange={(e) => setSettings({ ...settings, primaryColor: e.target.value })}
                  className="w-20 h-10"
                />
                <Input
                  value={settings.primaryColor}
                  onChange={(e) => setSettings({ ...settings, primaryColor: e.target.value })}
                  placeholder="#000000"
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Layout className="mr-2" />
                Button Position
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {positions.map((pos) => (
                  <Button
                    key={pos.id}
                    variant={settings.position === pos.id ? "default" : "outline"}
                    onClick={() => setSettings({ ...settings, position: pos.id })}
                    className="w-full"
                  >
                    {pos.label}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Border Radius</h3>
              <Input
                type="range"
                min="0"
                max="20"
                value={settings.buttonRadius}
                onChange={(e) => setSettings({ ...settings, buttonRadius: e.target.value })}
                className="w-full"
              />
              <div className="text-center mt-2">{settings.buttonRadius}px</div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <MessageSquare className="mr-2" />
                Feedback Icon
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Input
                    type="checkbox"
                    checked={settings.showIcon}
                    onChange={(e) => setSettings({ ...settings, showIcon: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <Label>Show Icon</Label>
                </div>
                {settings.showIcon && (
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant={settings.iconPosition === 'left' ? "default" : "outline"}
                      onClick={() => setSettings({ ...settings, iconPosition: 'left' })}
                    >
                      Icon Left
                    </Button>
                    <Button
                      variant={settings.iconPosition === 'right' ? "default" : "outline"}
                      onClick={() => setSettings({ ...settings, iconPosition: 'right' })}
                    >
                      Icon Right
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Preview Box */}
          <div className="space-y-6">
            <div className="bg-gray-100 p-6 rounded-lg border h-[400px] relative">
              <div className={`absolute ${settings.position.includes('bottom') ? 'bottom-4' : 'top-4'} ${settings.position.includes('right') ? 'right-4' : 'left-4'}`}>
                <Button
                  onClick={() => setIsModalOpen(true)}
                  style={{
                    backgroundColor: settings.primaryColor,
                    borderRadius: `${settings.buttonRadius}px`,
                  }}
                  className="text-white flex items-center gap-2"
                >
                  {settings.showIcon && settings.iconPosition === 'left' && (
                    <MessageSquare className="w-4 h-4" />
                  )}
                  {settings.buttonText}
                  {settings.showIcon && settings.iconPosition === 'right' && (
                    <MessageSquare className="w-4 h-4" />
                  )}
                </Button>
              </div>

              {/* Modal Preview */}
              {isModalOpen && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
                  <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
                    <Button
                      variant="ghost"
                      className="absolute right-2 top-2"
                      onClick={() => setIsModalOpen(false)}
                    >
                      ✕
                    </Button>
                    <div className="mb-4">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-5 h-5" style={{ color: settings.primaryColor }} />
                        <h3 className="text-xl font-semibold">Share your feedback</h3>
                      </div>
                    </div>
                    <textarea
                      className="w-full p-2 border rounded-md mb-4"
                      placeholder="Your feedback..."
                      rows={4}
                    />
                    <Button
                      className="w-full text-white"
                      style={{ backgroundColor: settings.primaryColor }}
                      onClick={() => setIsModalOpen(false)}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Code Preview */}
            <div className="bg-gray-900 p-4 rounded-lg relative">
              <pre className="text-white text-sm overflow-x-auto">
                {generateCode()}
              </pre>
              <CopyBtn text={generateCode()} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizerSection;