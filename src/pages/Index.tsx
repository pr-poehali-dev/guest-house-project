import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-primary">Семейный Гостевой Дом</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О нас</a>
              <a href="#rooms" className="text-gray-600 hover:text-primary transition-colors">Номера</a>
              <a href="#pool" className="text-gray-600 hover:text-primary transition-colors">Бассейн</a>
              <a href="#booking" className="text-gray-600 hover:text-primary transition-colors">Бронирование</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/2d4a6d8f-c19e-4439-8cad-09752148816a.jpg" 
            alt="Гостевой дом"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Семейный Отдых
            <br />
            <span className="text-blue-300">Мечты</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in">
            12 просторных номеров, современный бассейн и атмосфера уюта для незабываемого семейного отдыха
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="text-lg px-8 py-6">
              <Icon name="Calendar" className="mr-2" size={20} />
              Забронировать сейчас
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Icon name="Phone" className="mr-2" size={20} />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">О нашем гостевом доме</h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы создали идеальное место для семейного отдыха, где комфорт сочетается с современным дизайном. 
                Наш гостевой дом предлагает 12 просторных номеров, каждый из которых продуман до мельчайших деталей.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Icon name="Users" className="text-primary" size={24} />
                  <span className="text-gray-700">Семейный отдых</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Wifi" className="text-primary" size={24} />
                  <span className="text-gray-700">Бесплатный Wi-Fi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Car" className="text-primary" size={24} />
                  <span className="text-gray-700">Парковка</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Coffee" className="text-primary" size={24} />
                  <span className="text-gray-700">Завтрак</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/3e20f453-862c-422b-99e2-8c0d214f3a7c.jpg" 
                alt="Номер в гостевом доме"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Наши номера</h2>
            <p className="text-xl text-gray-600">12 просторных номеров для комфортного размещения</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Семейный номер", guests: "2-4 гостя", features: ["Двуспальная кровать", "Диван-кровать", "Мини-кухня", "Балкон"] },
              { title: "Стандартный номер", guests: "2 гостя", features: ["Двуспальная кровать", "Рабочая зона", "Кондиционер", "Телевизор"] },
              { title: "Люкс номер", guests: "2-3 гостя", features: ["King-size кровать", "Гостиная зона", "Джакузи", "Терраса"] },
              { title: "Детский номер", guests: "2-3 гостя", features: ["Двухъярусная кровать", "Игровая зона", "Детская мебель", "Безопасность"] },
              { title: "Номер для пар", guests: "2 гостя", features: ["Романтическая обстановка", "Камин", "Винный холодильник", "Вид на сад"] },
              { title: "Групповой номер", guests: "4-6 гостей", features: ["Несколько кроватей", "Общая зона", "Кухня", "Большая терраса"] }
            ].map((room, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <Icon name="Bed" size={48} className="text-primary" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{room.title}</h3>
                  <p className="text-gray-600 mb-4">{room.guests}</p>
                  <ul className="space-y-2">
                    {room.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <Icon name="Check" size={16} className="text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4">Подробнее</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pool Section */}
      <section id="pool" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/img/c05cfa10-35c6-4932-a792-28e0813f11b3.jpg" 
                alt="Бассейн"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Современный бассейн</h2>
              <p className="text-lg text-gray-600 mb-8">
                Наш открытый бассейн - идеальное место для семейного отдыха и расслабления. 
                Чистая вода, комфортная зона отдыха и безопасность для детей.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Icon name="Waves" className="text-blue-500 mb-3" size={32} />
                  <h3 className="font-semibold mb-2">Чистая вода</h3>
                  <p className="text-gray-600 text-sm">Система очистки и фильтрации воды</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Icon name="Shield" className="text-green-500 mb-3" size={32} />
                  <h3 className="font-semibold mb-2">Безопасность</h3>
                  <p className="text-gray-600 text-sm">Детская зона и спасательное оборудование</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Icon name="Sun" className="text-yellow-500 mb-3" size={32} />
                  <h3 className="font-semibold mb-2">Солнечная зона</h3>
                  <p className="text-gray-600 text-sm">Лежаки и зонтики для отдыха</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Icon name="Clock" className="text-purple-500 mb-3" size={32} />
                  <h3 className="font-semibold mb-2">Режим работы</h3>
                  <p className="text-gray-600 text-sm">С 08:00 до 22:00 ежедневно</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Забронировать номер</h2>
            <p className="text-xl text-gray-600">Оставьте заявку и мы свяжемся с вами для подтверждения</p>
          </div>
          
          <Card className="p-8">
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="checkin">Дата заезда</Label>
                  <Input type="date" id="checkin" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="checkout">Дата выезда</Label>
                  <Input type="date" id="checkout" className="mt-2" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="guests">Количество гостей</Label>
                  <Input type="number" id="guests" placeholder="2" min="1" max="6" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="room-type">Тип номера</Label>
                  <select className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Семейный номер</option>
                    <option>Стандартный номер</option>
                    <option>Люкс номер</option>
                    <option>Детский номер</option>
                    <option>Номер для пар</option>
                    <option>Групповой номер</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input type="text" id="name" placeholder="Иван Иванов" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input type="tel" id="phone" placeholder="+7 (999) 123-45-67" className="mt-2" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="message">Дополнительные пожелания</Label>
                <Textarea 
                  id="message" 
                  placeholder="Расскажите о ваших пожеланиях..."
                  className="mt-2"
                  rows={4}
                />
              </div>
              
              <Button size="lg" className="w-full text-lg py-6">
                <Icon name="Send" className="mr-2" size={20} />
                Отправить заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Семейный Гостевой Дом</h3>
              <p className="text-gray-400 mb-4">
                Современный гостевой дом для незабываемого семейного отдыха
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Icon name="Phone" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Icon name="Mail" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Icon name="MapPin" size={20} />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (999) 123-45-67
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@guesthouse.ru
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  г. Москва, ул. Примерная, 123
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Время работы</h4>
              <div className="space-y-2 text-gray-400">
                <div>Ресепшн: 24/7</div>
                <div>Бассейн: 08:00 - 22:00</div>
                <div>Завтрак: 07:00 - 11:00</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Семейный Гостевой Дом. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;