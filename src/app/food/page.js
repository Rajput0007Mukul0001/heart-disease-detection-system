"use client"
import React from 'react';
import Navbar2 from '../../Components/Navbar2';
import Footer from '../../Components/Footer'

function Page() {
    return (
            <>
            <Navbar2/>

            <div className="max-w-6xl m-4 cursor-pointer p-10 mx-auto justify-center bg-gray-600 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-blue-200">17 Incredibly Heart-Healthy Foods</h2>
                <img className="mx-auto border-gray-600 rounded-md cursor-pointer mb-6 text-blue-200" src='https://media.istockphoto.com/id/1147561466/photo/dark-culinary-background-with-fresh-produce.webp?b=1&s=170667a&w=0&k=20&c=-vkYzQ55GRYOiCBj-FTDzQWadVqWKGQ1RrCvQWGDeCo=' alt='image of foods'/>
                {/* List of heart-healthy foods */}
                <div className="space-y-8">
                    {/* Leafy green vegetables */}
                    <div>
                        <h3 className="text-xl font-bold mb-2 text-green-600">1. Leafy green vegetables</h3>
                        <p className="text-gray-300 mb-4">
                            Leafy green vegetables like spinach, kale, and collard greens are well known for their wealth of vitamins, minerals, and antioxidants. They are high in vitamin K, which helps protect your arteries and promote proper blood clotting. They’re also high in dietary nitrates, which have been shown to reduce blood pressure, decrease arterial stiffness, and improve the function of cells lining the blood vessels.
                        </p>
                        <p className="text-gray-300">
                            <strong>Benefits:</strong> High in vitamin K and nitrates, can help reduce blood pressure and improve arterial function. A higher intake is associated with a lower risk of heart disease.
                        </p>
                    </div>

                    {/* Whole grains */}
                    <div>
                        <h3 className="text-xl font-bold mb-2 text-green-600">2. Whole grains</h3>
                        <p className="text-gray-300 mb-4">
                            Whole grains include all three nutrient-rich parts of the grain: germ, endosperm, and bran. Common types include whole wheat, brown rice, oats, rye, barley, buckwheat, and quinoa. Multiple studies have found that eating more whole grains can benefit your heart health.
                        </p>
                        <p className="text-gray-300">
                            <strong>Benefits:</strong> Eating whole grains is associated with lower cholesterol and systolic blood pressure, as well as a lower risk of heart disease.
                        </p>
                    </div>

                    {/* Berries */}
                    <div>
                        <h3 className="text-xl font-bold mb-2 text-green-600">3. Berries</h3>
                        <p className="text-gray-300 mb-4">
                            Strawberries, blueberries, blackberries, and raspberries are jam-packed with nutrients that play a central role in heart health. Berries are rich in antioxidants like anthocyanins, which protect against oxidative stress and inflammation.
                        </p>
                        <p className="text-gray-300">
                            <strong>Benefits:</strong> Eating berries can reduce multiple risk factors for heart disease.
                        </p>
                    </div>

                    {/* Avocados */}
                    <div>
                        <h3 className="text-xl font-bold mb-2 text-green-600">4. Avocados</h3>
                        <p className="text-gray-300 mb-4">
                            Avocados are an excellent source of heart-healthy monounsaturated fats, which have been linked to reduced cholesterol levels and a lower risk of heart disease. They are also rich in potassium, a nutrient essential to heart health.
                        </p>
                        <p className="text-gray-300">
                            <strong>Benefits:</strong> High in monounsaturated fats and potassium. They may help lower your cholesterol, blood pressure, and risk of metabolic syndrome.
                        </p>
                    </div>

                    {/* Fatty fish and fish oil */}
                    <div>
                        <h3 className="text-xl font-bold mb-2 text-green-600">5. Fatty fish and fish oil</h3>
                        <p className="text-gray-300 mb-4">
                            Fatty fish like salmon, mackerel, sardines, and tuna are loaded with omega-3 fatty acids, which have been studied extensively for their heart-health benefits.
                        </p>
                        <p className="text-gray-300">
                            <strong>Benefits:</strong> High in omega-3 fatty acids and may help reduce heart disease risk factors, including blood pressure, triglycerides, and cholesterol.
                        </p>
                    </div>

                    {/* Walnuts */}
                    <div>
                        <h3 className="text-xl font-bold mb-2 text-green-600">6. Walnuts</h3>
                        <p className="text-gray-300 mb-4">
                            Walnuts are a great source of fiber and micronutrients like magnesium, copper, and manganese. Research shows that incorporating walnuts into your diet can help protect against heart disease.
                        </p>
                        <p className="text-gray-300">
                            <strong>Benefits:</strong> Walnuts can help reduce cholesterol and blood pressure and may be associated with a lower risk of heart disease.
                        </p>
                    </div>

                    {/* Beans */}
                    <div>
                        <h3 className="text-xl font-bold mb-2 text-green-600">7. Beans</h3>
                        <p className="text-gray-300 mb-4">
                            Beans contain resistant starch, which resists digestion and is fermented by the beneficial bacteria in your gut. Multiple studies have found that eating beans can reduce certain risk factors for heart disease.
                        </p>
                        <p className="text-gray-300">
                            <strong>Benefits:</strong> Beans are high in resistant starch and have been shown to reduce levels of cholesterol, lower blood pressure, and improve glycemic control.
                        </p>
                    </div>

                    {/* Dark chocolate */}
                    <div>
                        <h3 className="text-xl font-bold mb-2 text-green-600">8. Dark chocolate</h3>
                        <p className="text-gray-300 mb-4">
                            Dark chocolate is rich in antioxidants like flavonoids, which can help boost heart health. Consuming dark chocolate in moderation has been associated with a lower risk of coronary heart disease.
                        </p>
                        <p className="text-gray-300">
                            <strong>Benefits:</strong> Dark chocolate is high in antioxidants like flavonoids and has been linked to a lower risk of developing heart disease.
                        </p>
                    </div>

                    {/* Tomatoes */}
                    <div>
                        <h3 className="text-xl font-bold mb-2 text-green-600">9. Tomatoes</h3>
                        <p className="text-gray-300 mb-4">
                            Tomatoes are rich in lycopene, a natural plant pigment with powerful antioxidant properties. Low blood levels of lycopene are linked to an increased risk of heart attack and stroke.
                        </p>
                        <p className="text-gray-300">
                            <strong>Benefits:</strong> Tomatoes are rich in lycopene and have been associated with a lower risk of heart disease and stroke, as well as an increase in HDL (good) cholesterol.
                        </p>
                    </div>

                    {/* Almonds */}
                    <div>
                        <h3 className="text-xl font-bold mb-2 text-green-600">10. Almonds</h3>
                        <p className="text-gray-300 mb-4">
                            Almonds are incredibly nutrient-dense, boasting many vitamins and minerals crucial to heart health. They’re also a good source of heart-healthy monounsaturated fats and fiber.
                        </p>
                        <p className="text-gray-300">
                            <strong>Benefits:</strong> Almonds are high in fiber and monounsaturated fats and have been linked to reductions in cholesterol and belly fat.
                        </p>
                    </div>

                    {/* Chia seeds, flaxseeds, and hemp seeds */}
                    <div>
                        <h3 className="text-xl font-bold mb-2 text-green-600">11-13. Chia seeds, flaxseeds, and hemp seeds</h3>
                        <p className="text-gray-300 mb-4">
                            Chia seeds, flaxseeds, and hemp seeds are all great sources of heart-healthy nutrients, including fiber and omega-3 fatty acids. Studies have found that adding these seeds to your diet can improve many heart disease risk factors, including inflammation, blood pressure, cholesterol, and triglycerides.
                        </p>
                        <p className="text-gray-300">
                            <strong>Benefits:</strong> Human and animal studies have found that eating seeds may improve several heart disease risk factors, including inflammation, blood pressure, cholesterol, and triglycerides.
                        </p>
                    </div>

                    {/* Garlic */}
                    <div>
                        <h3 className="text-xl font-bold mb-2 text-green-600">14. Garlic</h3>
                        <p className="text-gray-300 mb-4">
                            Garlic has potent medicinal properties that may help improve heart health. It contains a compound called allicin, which is believed to have many therapeutic effects, including helping to reduce blood pressure and cholesterol levels.
                        </p>
                        <p className="text-gray-300">
                            <strong>Benefits:</strong> Garlic and its components have been shown to help reduce blood pressure and cholesterol. They may also help inhibit blood clot formation.
                        </p>
                    </div>

                    {/* Olive oil */}
                    <div>
                        <h3 className="text-xl font-bold mb-2 text-green-600">15. Olive oil</h3>
                        <p className="text-gray-300 mb-4">
                            A staple in the Mediterranean diet, the heart-health benefits of olive oil are well documented. It’s packed with antioxidants, which can relieve inflammation.
                        </p>
                    </div>
                </div>
            </div>


            <div className="max-w-6xl m-4 p-10  mx-auto bg-gray-600 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-200">10 Yoga Postures Good for the Heart</h2>
            
            <img className="mx-auto h-80 border-gray-600 rounded-md cursor-pointer mb-6 text-blue-200" src='https://plus.unsplash.com/premium_photo-1663011257554-eee57509f3a2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGhlYWx0aHklMjB5b2dhJTIwcG9zZSUyMHdpdGglMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D' alt='yoga pose'/>
            
            <h4 className="text-l underline cursor-pointer font-bold mb-6 text-center text-blue-300"><a href='https://www.fitsri.com/poses'>Click For Yoga Posture Defintive guide </a></h4>

            {/* List of heart-healthy yoga postures */}
            <div className="space-y-8">
                {/* Tadasana */}
                <div>
                    <h3 className="text-xl font-bold mb-2 text-green-600">1. Tadasana (Mountain Pose)</h3>
                    <p className="text-gray-300 mb-4">
                        Tadasana helps improve blood circulation and tones the heart. It is a simple standing pose that promotes balance and calm.
                    </p>
                    <p className="text-gray-300">
                        <strong>Benefits:</strong> Improves posture, strengthens legs, and promotes cardiovascular health.
                    </p>
                </div>

                {/* Vrikshasana */}
                <div>
                    <h3 className="text-xl font-bold mb-2 text-green-600">2. Vrikshasana (Tree Pose)</h3>
                    <p className="text-gray-300 mb-4">
                        Vrikshasana enhances concentration and improves balance. It helps in maintaining a steady heart rate.
                    </p>
                    <p className="text-gray-300">
                        <strong>Benefits:</strong> Strengthens the spine, legs, and improves balance and stability.
                    </p>
                </div>

                {/* Trikonasana */}
                <div>
                    <h3 className="text-xl font-bold mb-2 text-green-600">3. Trikonasana (Triangle Pose)</h3>
                    <p className="text-gray-300 mb-4">
                        Trikonasana helps stretch and open the chest, which improves cardiovascular function.
                    </p>
                    <p className="text-gray-300">
                        <strong>Benefits:</strong> Improves digestion, reduces stress, and strengthens legs and core.
                    </p>
                </div>

                {/* Bhujangasana */}
                <div>
                    <h3 className="text-xl font-bold mb-2 text-green-600">4. Bhujangasana (Cobra Pose)</h3>
                    <p className="text-gray-300 mb-4">
                        Bhujangasana strengthens the spine and opens the heart, improving blood flow.
                    </p>
                    <p className="text-gray-300">
                        <strong>Benefits:</strong> Strengthens back muscles, reduces stress, and improves lung capacity.
                    </p>
                </div>

                {/* Dhanurasana */}
                <div>
                    <h3 className="text-xl font-bold mb-2 text-green-600">5. Dhanurasana (Bow Pose)</h3>
                    <p className="text-gray-300 mb-4">
                        Dhanurasana stimulates the heart and enhances blood circulation.
                    </p>
                    <p className="text-gray-300">
                        <strong>Benefits:</strong> Stretches the entire body, improves posture, and relieves stress.
                    </p>
                </div>

                {/* Setu Bandhasana */}
                <div>
                    <h3 className="text-xl font-bold mb-2 text-green-600">6. Setu Bandhasana (Bridge Pose)</h3>
                    <p className="text-gray-300 mb-4">
                        Setu Bandhasana helps open the chest and improves heart function.
                    </p>
                    <p className="text-gray-300">
                        <strong>Benefits:</strong> Strengthens the back, relieves back pain, and improves blood circulation.
                    </p>
                </div>

                {/* Ardha Matsyendrasana */}
                <div>
                    <h3 className="text-xl font-bold mb-2 text-green-600">7. Ardha Matsyendrasana (Half Lord of the Fishes Pose)</h3>
                    <p className="text-gray-300 mb-4">
                        Ardha Matsyendrasana improves blood flow and heart function through a gentle twist.
                    </p>
                    <p className="text-gray-300">
                        <strong>Benefits:</strong> Stimulates digestive organs, relieves fatigue, and improves spinal flexibility.
                    </p>
                </div>

                {/* Paschimottanasana */}
                <div>
                    <h3 className="text-xl font-bold mb-2 text-green-600">8. Paschimottanasana (Seated Forward Bend)</h3>
                    <p className="text-gray-300 mb-4">
                        Paschimottanasana helps reduce stress and stimulate the heart.
                    </p>
                    <p className="text-gray-300">
                        <strong>Benefits:</strong> Stretches the spine and hamstrings, calms the mind, and relieves stress.
                    </p>
                </div>

                {/* Shavasana */}
                <div>
                    <h3 className="text-xl font-bold mb-2 text-green-600">9. Shavasana (Corpse Pose)</h3>
                    <p className="text-gray-300 mb-4">
                        Shavasana is a relaxation pose that calms the mind and reduces stress, benefiting heart health.
                    </p>
                    <p className="text-gray-300">
                        <strong>Benefits:</strong> Reduces stress, lowers blood pressure, and promotes relaxation.
                    </p>
                </div>

                {/* Anulom Vilom */}
                <div>
                    <h3 className="text-xl font-bold mb-2 text-green-600">10. Anulom Vilom (Alternate Nostril Breathing)</h3>
                    <p className="text-gray-300 mb-4">
                        Anulom Vilom improves cardiovascular health by balancing the body s energy channels.
                    </p>
                    <p className="text-gray-300">
                        <strong>Benefits:</strong> Improves respiratory function, reduces stress, and enhances heart health.
                    </p>
                </div>
            </div>
            </div>

            <div className="max-w-6xl m-4 p-10  mx-auto bg-gray-600 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-200">Beneficial Exercies For Heart </h2>

            <img className="mx-auto border-gray-600 rounded-md cursor-pointer mb-6 text-blue-200" src='https://plus.unsplash.com/premium_photo-1682096753944-875d4f37c8d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhbHRoeSUyMGd5bSUyMGV4ZXJjaXNlJTIwcG9zZSUyMHdpdGglMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D' alt='exercise'/>

            <h4 className="text-l underline cursor-pointer font-bold mb-6 text-center text-blue-300"><a href='https://workoutlabs.com/exercise-guide/'>Click For Illustrative guide for heart and body exercise</a></h4>
{/* List of heart-healthy exercises */}
<div className="space-y-8">
    {/* Walking */}
    <div>
        <h3 className="text-xl font-bold mb-2 text-green-600">1. Walking</h3>
        <p className="text-gray-300 mb-4">
            Walking is a simple and effective exercise to improve cardiovascular health.
        </p>
        <p className="text-gray-300">
            <strong>Benefits:</strong> Helps maintain a healthy weight, reduces blood pressure, and strengthens the heart.
        </p>
    </div>

    {/* Running */}
    <div>
        <h3 className="text-xl font-bold mb-2 text-green-600">2. Running</h3>
        <p className="text-gray-300 mb-4">
            Running is an excellent aerobic exercise that strengthens the heart and lungs.
        </p>
        <p className="text-gray-300">
            <strong>Benefits:</strong> Improves cardiovascular fitness, burns calories, and reduces stress.
        </p>
    </div>

    {/* Cycling */}
    <div>
        <h3 className="text-xl font-bold mb-2 text-green-600">3. Cycling</h3>
        <p className="text-gray-300 mb-4">
            Cycling is a low-impact exercise that promotes heart health and overall fitness.
        </p>
        <p className="text-gray-300">
            <strong>Benefits:</strong> Strengthens the heart, improves joint mobility, and reduces stress.
        </p>
    </div>

    {/* Swimming */}
    <div>
        <h3 className="text-xl font-bold mb-2 text-green-600">4. Swimming</h3>
        <p className="text-gray-300 mb-4">
            Swimming is a full-body workout that enhances cardiovascular health and muscle strength.
        </p>
        <p className="text-gray-300">
            <strong>Benefits:</strong> Improves heart and lung capacity, tones muscles, and reduces stress.
        </p>
    </div>

    {/* Jumping rope */}
    <div>
        <h3 className="text-xl font-bold mb-2 text-green-600">5. Jumping Rope</h3>
        <p className="text-gray-300 mb-4">
            Jumping rope is a fun and effective way to boost heart health and burn calories.
        </p>
        <p className="text-gray-300">
            <strong>Benefits:</strong> Enhances cardiovascular fitness, improves coordination, and burns calories.
        </p>
    </div>

    {/* Strength training */}
    <div>
        <h3 className="text-xl font-bold mb-2 text-green-600">6. Strength Training</h3>
        <p className="text-gray-300 mb-4">
            Strength training helps build muscle and improve heart health by reducing the workload on the heart.
        </p>
        <p className="text-gray-300">
            <strong>Benefits:</strong> Increases muscle strength, boosts metabolism, and supports heart health.
        </p>
    </div>  

    {/* Aerobic dancing */}
    <div>
        <h3 className="text-xl font-bold mb-2 text-green-600">7. Aerobic Dancing</h3>
        <p className="text-gray-300 mb-4">
            Aerobic dancing combines cardiovascular exercise with music and dance movements, making it enjoyable and effective for heart health.
        </p>
        <p className="text-gray-300">
            <strong>Benefits:</strong> Improves cardiovascular endurance, enhances coordination, and lifts mood through rhythmic movement.
        </p>
    </div>

    {/* Rowing */}
    <div>
        <h3 className="text-xl font-bold mb-2 text-green-600">8. Rowing</h3>
        <p className="text-gray-300 mb-4">
            Rowing is a full-body workout that strengthens the heart and improves overall fitness.
        </p>
        <p className="text-gray-300">
            <strong>Benefits:</strong> Builds cardiovascular endurance, tones muscles, and promotes weight loss.
        </p>
    </div>

    {/* High-intensity interval training (HIIT) */}
    <div>
        <h3 className="text-xl font-bold mb-2 text-green-600">9. High-Intensity Interval Training (HIIT)</h3>
        <p className="text-gray-300 mb-4">
            HIIT involves short bursts of intense exercise followed by brief recovery periods. It is effective for improving cardiovascular fitness and burning calories.
        </p>
        <p className="text-gray-300">
            <strong>Benefits:</strong> Boosts metabolism, improves heart health, and enhances athletic performance.
        </p>
    </div>

    {/* Circuit training */}
    <div>
        <h3 className="text-xl font-bold mb-2 text-green-600">10. Circuit Training</h3>
        <p className="text-gray-300 mb-4">
            Circuit training involves performing a series of exercises in sequence with minimal rest between them. It provides both cardiovascular and strength benefits.
        </p>
        <p className="text-gray-300">
            <strong>Benefits:</strong> Increases heart rate, burns calories, and improves muscular endurance and cardiovascular health.
        </p>
    </div>
</div>


            </div>

            <Footer/>

            </>
            );
}

export default Page;