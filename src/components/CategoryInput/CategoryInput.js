import React, { useState, useEffect } from "react";
import {
    CategoryContainer, Input, CategoryList,
    CategoryItem, CategoryLabel, RadioButton, ArrowDown, ArrowUp
} from "./CategoryInput.styled";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { getCategoriesByExpense, getCategoriesByIncome } from "../../api/categoriesApi";

const CategoryInput = ({ type, categoryPick, setCategory}) => {
    const [isCategories, setIsCategories] = useState(false);
    const [categories, setCategories] = useState("");

    useEffect(() => {   
        async function getCategory() {
            try {
                const listExp = await getCategoriesByExpense();
                setCategories(listExp)
                if (type === 'income') {
                const listInc = await getCategoriesByIncome();
                setCategories(listInc)    
                }
            } catch (error) {
                // toast.warning(error.message)
            }
        } getCategory()}, []);

    //    console.log(categories) 
    // const expenseCategory = [
    //     "Транспорт",
    //     "Продукты",
    //     "Здоровье",
    //     "Алкоголь",
    //     "Развлечения",
    //     "Всё для дома",
    //     "Техника",
    //     "Коммуналка, связь",
    //     "Спорт, хобби",
    //     "Образование",
    //     "Прочее",
    // ];
    const incomeCategory = ["ЗП", "Доп. доход"];

    const handleClick = () => {
    setIsCategories(!isCategories);
    };

    const handleCategoryClick = (e) => {
    setCategory(e.currentTarget.value);
    handleClick();
    };

    return (
        <CategoryContainer>
            <Input
                id="category_input"
                autoComplete="off"
                type="text"
                readOnly
                value={categoryPick}                
                placeholder={
                type === "expenses" ? "Категория товара" : "Категория дохода"
                }
                onClick={handleClick}
                onFocus={handleClick}            
            />
            {!isCategories || (
                <CategoryList>
                    {type === "expenses"
                        ? categories.map(({_id, name}) => (
                            <CategoryItem key={_id}>
                                <CategoryLabel tabIndex={0}>
                                    <RadioButton
                                        onClick={handleCategoryClick}
                                        hidden
                                        value={name}
                                        readOnly
                                        type="radio"
                                        name="exp_category"
                                    />
                                    {name}
                                </CategoryLabel>
                            </CategoryItem>
                        ))
                        : categories.map(({_id, name}) => (
                            <CategoryItem key={_id}>
                                <CategoryLabel tabIndex={0}>
                                    <RadioButton
                                        onClick={handleCategoryClick}
                                        hidden
                                        value={name}
                                        readOnly
                                        type="radio"
                                        name="exp_category"                            
                                    />
                                    {name}
                                </CategoryLabel>
                            </CategoryItem>
                        ))}
                </CategoryList>
            )}
            {!isCategories ? (
                <ArrowDown
                onClick={handleClick}
                onFocus={handleClick}
                id="arrow"
                >
                    <IoIosArrowDown
                        color="#C7CCDC"
                        width="12px"
                        height="8"
                    />
                </ArrowDown>
            ) : (
                <ArrowUp
                onClick={handleClick}
                onFocus={handleClick}
                id="arrow"
                >
                    <IoIosArrowUp
                        color="#C7CCDC"
                        width="12px"
                        height="8"                            
                    />
                </ArrowUp>
            )}
        </CategoryContainer>
    );
};

export default CategoryInput;