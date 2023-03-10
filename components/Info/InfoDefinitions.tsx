import ContentContainer from 'components/ContentContainer/ContentContainer';
import SectionLesserTitle from 'components/SectionLesserTitle/SectionLesserTitle';

import styles from './Info.module.scss';

const InfoDefinitions = (): JSX.Element => (
  <section className={styles.info}>
    <ContentContainer>
      <SectionLesserTitle>Термины и определения</SectionLesserTitle>
      <div className={styles.info__columns}>
        <div>
          <p>
            <strong>Объекты культурного наследия</strong> (памятники истории и
            культуры) - объекты недвижимого имущества со связанными с ними
            произведениями живописи, скульптуры, декоративно-прикладного
            искусства, объектами науки и техники и иными предметами материальной
            культуры, возникающие в результате исторических событий,
            представляющие собой ценность с точки зрения истории, археологии,
            архитектуры, градостроительства, искусства, науки и техники,
            эстетики, этнологии или антропологии, социальной культуры и
            являющиеся свидетельством эпох и цивилизаций, подлинными источниками
            информации о зарождении и развитии культуры.
          </p>
          <p>
            <strong>Памятники -</strong> отдельные постройки, здания и
            сооружения с исторически сложившимися территориями (в том числе
            памятники религиозного назначения: церкви, колокольни, часовни,
            костелы, кирхи, мечети, буддистские храмы, пагоды, синагоги,
            молельные дома и другие объекты, специально предназначенные для
            богослужений); мемориальные квартиры; мавзолеи, отдельные
            захоронения; произведения монументального искусства; объекты науки и
            техники, включая военные; частично или полностью скрытые в земле или
            под водой следы существования человека, включая все движимые
            предметы, имеющие к ним отношение, основным или одним из основных
            источников информации о которых являются археологические раскопки.
          </p>
          <p>
            <strong>Ансамбли -</strong> четко локализуемые на исторически
            сложившихся территориях группы изолированных или объединенных
            памятников, строений и сооружений фортификационного, дворцового,
            жилого, общественного, административного, торгового,
            производственного, научного, учебного назначения, а также памятников
            и сооружений религиозного назначения (храмовые комплексы, дацаны,
            монастыри, подворья), в том числе фрагменты исторических планировок
            и застроек поселений, которые могут быть отнесены к
            градостроительным ансамблям; произведения ландшафтной архитектуры и
            садово-паркового искусства (сады, парки, скверы, бульвары),
            некрополи.
          </p>
          <p>
            <strong>Достопримечательные места</strong> - творения, созданные
            человеком, или совместные творения человека и природы, в том числе
            места бытования народных художественных промыслов; центры
            исторических поселений или фрагменты градостроительной планировки и
            застройки; памятные места, культурные и природные ландшафты,
            связанные с историей формирования народов и иных этнических
            общностей на территории Российской Федерации, историческими (в том
            числе военными) событиями, жизнью выдающихся исторических личностей;
            культурные слои, остатки построек древних городов, городищ, селищ,
            стоянок; места совершения религиозных обрядов.
          </p>
          <p>
            <strong>Выявленные объекты культурного наследия -</strong> объекты,
            которые представляют собой историко-культурную ценность и в
            отношении которых вынесено заключение государственной
            историко-культурной экспертизы о включении их в единый
            государственный реестр в качестве объектов культурного наследия.
          </p>
          <p>
            <strong>Подлинность объекта культурного наследия</strong> -
            определяющий фактор ценности объекта культурного наследия. Понимание
            значения подлинности играет фундаментальную роль во всех научных
            исследованиях по проблемам культурного наследия и определяется
            четырьмя основными параметрами: подлинность &quot;материала&quot;
            (&quot;субстанции&quot;), подлинность &quot;мастерства&quot;
            исполнения, подлинность первоначального &quot;замысла&quot; (то есть
            подлинность &quot;формы&quot;) и подлинность &quot;окружения&quot;.
          </p>
          <p>
            <strong>Предмет охраны объекта культурного наследия</strong> -
            особенности подлинного облика объекта культурного наследия,
            послужившие основанием для включения его в реестр и подлежащие
            обязательному сохранению.
          </p>
          <p>
            <strong>
              Задание на проведение работ по сохранению объекта культурного
              наследия
            </strong>{' '}
            - перечень требований, условий, целей, задач, документально
            оформленных и выданных физическим или юридическим лицам
            (собственникам или правообладателям) соответствующим органом охраны
            объектов культурного наследия, определяющих состав и содержание
            научно-проектной документации, порядок и условия согласования
            научно-проектной документации с указанием инстанций и организаций;
            определяется порядком или регламентом, устанавливаемым
            соответствующим органом охраны объектов культурного наследия.
          </p>
          <p>
            <strong>
              Разрешение на работы по сохранению объекта культурного наследия
            </strong>{' '}
            - выдается соответствующим органом охраны объектов культурного
            наследия на проведение работ по сохранению объектов культурного
            наследия (памятников истории и культуры).
          </p>
          <p>
            <strong>Ремонтно-реставрационные работы</strong> - работы,
            направленные на сохранение объекта культурного наследия, в том числе
            консервация объекта культурного наследия, ремонт памятника,
            реставрация памятника или ансамбля, приспособление объекта
            культурного наследия для современного использования, а также
            научно-исследовательские, изыскательские, проектные и
            производственные работы, научное руководство, технический и
            авторский надзор.
          </p>
        </div>
        <div>
          <p>
            <strong>Консервация объекта культурного наследия</strong> -
            научно-исследовательские, изыскательские, проектные и
            производственные работы, проводимые в целях предотвращения ухудшения
            состояния объекта культурного наследия без изменения дошедшего до
            настоящего времени облика указанного объекта, в том числе
            противоаварийные работы.
          </p>
          <p>
            <strong>Реставрация памятника или ансамбля</strong> -
            научно-исследовательские, изыскательские, проектные и
            производственные работы, проводимые в целях выявления и сохранения
            историко-культурной ценности объекта культурного наследия.
          </p>
          <p>
            <strong>Ремонт памятника</strong> - научно-исследовательские,
            изыскательские, проектные и производственные работы, проводимые в
            целях поддержания в эксплуатационном состоянии памятника без
            изменения его особенностей, составляющих предмет охраны.
          </p>
          <p>
            <strong>
              Приспособление объекта культурного наследия для современного
              использования
            </strong>{' '}
            - научно-исследовательские, проектные и производственные работы,
            проводимые в целях создания условий для современного использования
            объекта культурного наследия без изменения его особенностей,
            составляющих предмет охраны, в том числе реставрация представляющих
            собой историко-культурную ценность элементов объекта культурного
            наследия.
          </p>
          <p>
            <strong>
              Воссоздание утраченного объекта культурного наследия
            </strong>{' '}
            - научно-исследовательские, изыскательские, проектные и
            производственные работы, проводимые в целях восстановления
            утраченного объекта культурного наследия; осуществляется посредством
            его реставрации в исключительных случаях при особой исторической,
            архитектурной, научной, художественной, градостроительной,
            эстетической или иной значимости указанного объекта и при наличии
            достаточных научных данных, необходимых для его воссоздания.
          </p>
          <p>
            <strong>Научно-проектная документация</strong> - единый комплекс
            научно-исследовательской, научно-изыскательской, проектной, сметной
            и отчетной документации для проведения работ по сохранению объектов
            культурного наследия (консервации, ремонта, реставрации,
            приспособления объекта для современного использования), а также их
            воссозданию.
          </p>
          <p>
            <strong>Проектная документация</strong> - документация, выполненная
            на основе научно-исследовательской и изыскательской документации и
            содержащая текстовые и графические материалы, а также определяющая
            архитектурные, конструктивные, инженерно-технические и
            инженерно-технологические решения для обеспечения выполнения работ
            по сохранению объектов культурного наследия.
          </p>
          <p>
            <strong>Эскизный проект</strong> - стадия проектной документации,
            содержащая принципиальные решения и дающая научно-методическое
            обоснование проектных решений.
          </p>
          <p>
            <strong>Рабочая документация</strong> - совокупность текстовых и
            графических документов, обеспечивающих реализацию принятых в
            утвержденной проектной документации технических решений, необходимых
            для проведения производственных работ по сохранению объекта
            культурного наследия, обеспечения оборудованием, изделиями и
            материалами и/или изготовление реставрационных изделий.
          </p>
          <p>
            <strong>
              Научное руководство разработкой научно-проектной документации
            </strong>{' '}
            - научно-методическое руководство и координация работы членов
            авторского коллектива при разработке научно-проектной документации,
            осуществляемая научным руководителем авторского коллектива.
          </p>
          <p>
            <strong>
              Научное руководство проведением работ по сохранению объекта
              культурного наследия
            </strong>{' '}
            - контроль, осуществляемый научным руководителем проекта за ведением
            исследований в процессе производства работ в целях обеспечения
            сохранности всех элементов подлинного облика объекта культурного
            наследия, выявленных в результате этих исследований, а также
            научно-методическая оценка проводимых ремонтно-реставрационных работ
            по сохранению объекта культурного наследия.
          </p>
          <p>
            <strong>Авторский надзор</strong> - один из видов услуг по надзору
            автора проекта и других разработчиков проектной документации
            (физических и юридических лиц) за проведением работ по сохранению
            объектов культурного наследия, осуществляемый в целях обеспечения
            соответствия решений, содержащихся в рабочей документации,
            выполняемым работам на объекте.
          </p>
          <p>
            <strong>Исполнительная документация</strong> - комплект чертежей на
            выполнение производственных ремонтно-реставрационных работ с
            корректировкой ранее принятых проектных решений на основании научных
            исследований, проведенных в процессе производства работ на объекте
            культурного наследия, является приложением к научно-реставрационному
            отчету.
          </p>
        </div>
      </div>
      <blockquote className={styles.info__quote}>
        Выдержки из ГОСТ Р 55528-2013 &quot;Состав и содержание научно-проектной
        документации по сохранению объектов культурного наследия. Памятники
        истории и культуры. Общие требования.&quot;
      </blockquote>
    </ContentContainer>
  </section>
);

export default InfoDefinitions;
