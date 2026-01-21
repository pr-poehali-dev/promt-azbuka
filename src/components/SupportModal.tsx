import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

interface SupportModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SupportModal = ({ open, onOpenChange }: SupportModalProps) => {
  const shareText = "Открыл для себя крутой проект «Первая азбука промт-архитектора»! Школьник из Верхней Салды создал систему, которая показывает, как ИИ поможет в 60 разных профессиях. Особенно впечатляет кейс по ВСМПО-АВИСМА. Отличный инструмент для профориентации! #промтархитектор #профориентация #ИИ #ВСМПО";
  const projectUrl = "https://promt-azbuka.ru";

  const handleShare = (platform: string) => {
    const urls: Record<string, string> = {
      vk: `https://vk.com/share.php?url=${encodeURIComponent(projectUrl)}&title=${encodeURIComponent(shareText)}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent(projectUrl)}&text=${encodeURIComponent(shareText)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + projectUrl)}`,
    };
    window.open(urls[platform], '_blank', 'width=600,height=400');
  };

  const handleEmailTeacher = () => {
    const subject = "Интересный проект по профориентации";
    const body = `Здравствуйте!\n\nХочу поделиться интересным образовательным проектом: «Первая азбука промт-архитектора».\n\n${shareText}\n\nСсылка: ${projectUrl}\n\nПроект создан школьником из МАОУ «Школа №14» (г. Верхняя Салда) под руководством педагога.\nМожет быть полезен для профориентационных занятий и уроков о цифровых профессиях.`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="text-4xl">💙</div>
            <DialogTitle className="text-2xl">Спасибо за поддержку!</DialogTitle>
          </div>
          <DialogDescription className="text-base">
            Благодарим за интерес к исследованию Кирилла Зверева. Каждая поддержка помогает развивать проект!
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Icon name="Share2" size={20} className="text-primary" />
              Поделиться в соцсетях
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Расскажите о проекте — это лучшая поддержка для школьного исследования!
            </p>
            <div className="flex flex-wrap gap-3">
              <Button 
                onClick={() => handleShare('vk')} 
                className="bg-[#0077FF] hover:bg-[#0066DD] text-white"
              >
                <Icon name="Share2" size={16} className="mr-2" />
                ВКонтакте
              </Button>
              <Button 
                onClick={() => handleShare('telegram')} 
                className="bg-[#0088CC] hover:bg-[#0077BB] text-white"
              >
                <Icon name="Send" size={16} className="mr-2" />
                Telegram
              </Button>
              <Button 
                onClick={() => handleShare('whatsapp')} 
                className="bg-[#25D366] hover:bg-[#1EBE57] text-white"
              >
                <Icon name="MessageCircle" size={16} className="mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Icon name="GraduationCap" size={20} className="text-primary" />
              Рассказать в школе
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Поделитесь с учителями — проект подходит для уроков информатики и профориентации
            </p>
            <Button onClick={handleEmailTeacher} variant="outline" className="w-full">
              <Icon name="Mail" size={16} className="mr-2" />
              Отправить письмо учителю
            </Button>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Icon name="Users" size={20} className="text-primary" />
              Подписаться на обновления
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Следите за новостями проекта в нашем Telegram-канале
            </p>
            <Button className="w-full bg-[#0088CC] hover:bg-[#0077BB] text-white">
              <Icon name="Send" size={16} className="mr-2" />
              Подписаться на канал
            </Button>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Icon name="Handshake" size={20} className="text-primary" />
              Предложить сотрудничество
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Для серьёзных предложений о партнёрстве и внедрении проекта в школах
            </p>
            <div className="space-y-3 mb-3">
              <Button className="w-full" variant="outline" asChild>
                <a href="/support">
                  <Icon name="FileText" size={16} className="mr-2" />
                  Заполнить форму партнёрства
                </a>
              </Button>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Mail" size={16} className="text-primary" />
                <span className="font-medium">Руководитель проекта:</span>
              </div>
              <a 
                href="mailto:l.luneva@live.ru" 
                className="text-sm text-primary hover:underline font-medium block"
              >
                l.luneva@live.ru
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-3">
                <Icon name="MapPin" size={16} />
                <span>МАОУ «Школа №14», г. Верхняя Салда</span>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
            <p className="text-xs text-muted-foreground text-center">
              Проект поддержали: МАОУ «Школа №14» • Учителя-предметники • 211+ подписчиков
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SupportModal;