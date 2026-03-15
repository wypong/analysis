var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-sets-of-real-numbers",
  "level": "1",
  "url": "sec-sets-of-real-numbers.html",
  "type": "Section",
  "number": "1.1",
  "title": "Sets of Real Numbers",
  "body": " Sets of Real Numbers   We use to denote the set of real numbers. For and , we define:       In particular, .  Some subsets of that we will encounter frequently are:   The set of natural numbers  The set of integers .  The set of rational numbers .     Bounded Subsets of  A real number is an upper bound upper bound bound upper (resp. a lower bound lower bound ) of a set of real numbers if (resp. ) for every . We write and for the sets of upper bounds and lower bounds of , respectively. It is straightforward to check that . In other words, is an upper bound of if and only if is a lower bound of .  A set is bounded above bounded above (resp. bounded below bounded below ) if it has an upper bound (resp. a lower bound). We say is bounded bounded if it is both bounded above and bounded below. A real-valued function is bounded (resp. bounded above, bounded below) if its range is bounded (resp. bounded above, bounded below). function bounded      The interval is bounded; for example, it is bounded above by and bounded below by .  The set is bounded below by , but it is not bounded above.   is neither bounded below nor above.  Every finite set of real numbers is bounded.  Every real number is both an upper bound and a lower bound of the empty set .     An upper bound of a set is also an upper bound of every subset of that set. Therefore, an intersection of sets that are bounded above is again bounded above. If and are upper bounds of and , respectively, then is an upper bound of . Thus, a finite union of sets bounded above is bounded above. Likewise, the family of subsets of that are bounded below (resp. bounded) is closed under arbitrary intersections and finite unions.    A set is bounded if and only if there exists such that .    One implication is immediate: if , then is bounded. For the other implication, suppose is bounded. Then so is . Hence is bounded above, say by . Then for all , so .    A supremum supremum of a set , denoted by , is the least upper bound of . In other words, if is an upper bound of and for every upper bound of . Dually, an infimum infimum of , denoted by , is the greatest lower bound of . In other words, if is a lower bound of and every lower bound of is at most . It is clear that (likewise ), if it exists, is unique.  A useful reformulation is: if and only if is an upper bound of and for every there exists with .     The set of upper bounds and the set of lower bounds of are and , respectively. Hence and .  The set of upper bounds and the set of lower bounds of are and the empty set, respectively. Hence and does not exist.   has neither a supremum nor an infimum.  The set of upper bounds and the set of lower bounds of are both . Conventionally, we write and . Note that neither nor exists in .      "
},
{
  "id": "subsec-bounded-subsets-2",
  "level": "2",
  "url": "sec-sets-of-real-numbers.html#subsec-bounded-subsets-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "upper bound lower bound "
},
{
  "id": "subsec-bounded-subsets-3",
  "level": "2",
  "url": "sec-sets-of-real-numbers.html#subsec-bounded-subsets-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bounded above bounded below bounded bounded "
},
{
  "id": "eg-bounded-subsets-examples",
  "level": "2",
  "url": "sec-sets-of-real-numbers.html#eg-bounded-subsets-examples",
  "type": "Example",
  "number": "1.1.1",
  "title": "",
  "body": "   The interval is bounded; for example, it is bounded above by and bounded below by .  The set is bounded below by , but it is not bounded above.   is neither bounded below nor above.  Every finite set of real numbers is bounded.  Every real number is both an upper bound and a lower bound of the empty set .    "
},
{
  "id": "prop-bounded-iff-abs-bound",
  "level": "2",
  "url": "sec-sets-of-real-numbers.html#prop-bounded-iff-abs-bound",
  "type": "Proposition",
  "number": "1.1.2",
  "title": "",
  "body": "  A set is bounded if and only if there exists such that .    One implication is immediate: if , then is bounded. For the other implication, suppose is bounded. Then so is . Hence is bounded above, say by . Then for all , so .   "
},
{
  "id": "subsec-bounded-subsets-7",
  "level": "2",
  "url": "sec-sets-of-real-numbers.html#subsec-bounded-subsets-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "supremum infimum "
},
{
  "id": "eg-inf-and-sup",
  "level": "2",
  "url": "sec-sets-of-real-numbers.html#eg-inf-and-sup",
  "type": "Example",
  "number": "1.1.3",
  "title": "",
  "body": "   The set of upper bounds and the set of lower bounds of are and , respectively. Hence and .  The set of upper bounds and the set of lower bounds of are and the empty set, respectively. Hence and does not exist.   has neither a supremum nor an infimum.  The set of upper bounds and the set of lower bounds of are both . Conventionally, we write and . Note that neither nor exists in .    "
},
{
  "id": "sec-completeness-axiom",
  "level": "1",
  "url": "sec-completeness-axiom.html",
  "type": "Section",
  "number": "1.2",
  "title": "The Completeness Axiom",
  "body": " The Completeness Axiom   The following axiom is what sets the real field apart from other ordered fields.   The Completeness Axiom of   Every non-empty set of real numbers that is bounded above has a supremum in .    For an ordered set, the least upper bound property  least upper bound property means that every nonempty subset that is bounded above has a least upper bound, that is, a supremum, in the set. Thus, the completeness axiom says that , with its usual order, has the least upper bound property. Dually, this is equivalent to saying that every nonempty subset of that is bounded below has an infimum in ; see .    Consequences  An ordered field is Archimedean  Archimedean if for every in the field there exists such that .    The ordered field is Archimedean.    By the definition above, it suffices to show that for every there exists such that .  Suppose instead that some were an upper bound for . Then would be non-empty and bounded above, so by the least upper bound property, would exist. Since , the number cannot be an upper bound of . So there is with . Then , and , contradicting that is an upper bound of .  Therefore is not bounded above in , and hence is Archimedean.      For any and any , there exists such that .    Since , the number is real. By , there exists such that . Multiplying by gives .      For any , there exists such that .    Apply with . Then there exists such that . Since , dividing by yields .      For any , there exists such that .    By , there exists such that . Then .  Consider the finite set Since , the set of integers in that are at most is non-empty. Let be the largest such integer.  Then . Also , because . Hence . By maximality of , the integer cannot satisfy . Therefore , and so .      For any , if , then there exists such that .    By , there exists such that .  If , then so , contradicting the hypothesis. Therefore .  Let . Then and . In particular, .    A subset of is dense   dense  if between any two real numbers lies an element of .    The set is dense in .    Let with . Then , so by there exists such that .  Applying to the numbers and , we obtain an integer such that .  Since , dividing by gives . Because , this proves that is dense in .     Existence of Positive Square Roots   For each , there exists a unique such that .    Uniqueness is immediate because is strictly increasing on .  For existence, define . The set is non-empty: if , then ; if , then . It is bounded above by , since implies . By completeness, exists.  If , then for sufficiently small , we still have , so , contradicting that is an upper bound of . If , then for sufficiently small , ; then every satisfies , so is an upper bound of , contradicting leastness of . Hence .    A standard comparison example is the ordered field : the set is non-empty and bounded above in , but it has no supremum in . Therefore does not satisfy the least upper bound property.   "
},
{
  "id": "ax-least-upper-bound-property",
  "level": "2",
  "url": "sec-completeness-axiom.html#ax-least-upper-bound-property",
  "type": "Axiom",
  "number": "1.2.1",
  "title": "The Completeness Axiom of <span class=\"process-math\">\\(\\R\\)<\/span>.",
  "body": " The Completeness Axiom of   Every non-empty set of real numbers that is bounded above has a supremum in .   "
},
{
  "id": "sec-completeness-axiom-2-3",
  "level": "2",
  "url": "sec-completeness-axiom.html#sec-completeness-axiom-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "least upper bound property "
},
{
  "id": "subsec-completeness-consequences-2",
  "level": "2",
  "url": "sec-completeness-axiom.html#subsec-completeness-consequences-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Archimedean "
},
{
  "id": "prop-n-unbounded-above",
  "level": "2",
  "url": "sec-completeness-axiom.html#prop-n-unbounded-above",
  "type": "Proposition",
  "number": "1.2.2",
  "title": "",
  "body": "  The ordered field is Archimedean.    By the definition above, it suffices to show that for every there exists such that .  Suppose instead that some were an upper bound for . Then would be non-empty and bounded above, so by the least upper bound property, would exist. Since , the number cannot be an upper bound of . So there is with . Then , and , contradicting that is an upper bound of .  Therefore is not bounded above in , and hence is Archimedean.   "
},
{
  "id": "prop-archimedean-property",
  "level": "2",
  "url": "sec-completeness-axiom.html#prop-archimedean-property",
  "type": "Proposition",
  "number": "1.2.3",
  "title": "",
  "body": "  For any and any , there exists such that .    Since , the number is real. By , there exists such that . Multiplying by gives .   "
},
{
  "id": "prop-reciprocal-archimedean",
  "level": "2",
  "url": "sec-completeness-axiom.html#prop-reciprocal-archimedean",
  "type": "Proposition",
  "number": "1.2.4",
  "title": "",
  "body": "  For any , there exists such that .    Apply with . Then there exists such that . Since , dividing by yields .   "
},
{
  "id": "prop-integer-part",
  "level": "2",
  "url": "sec-completeness-axiom.html#prop-integer-part",
  "type": "Proposition",
  "number": "1.2.5",
  "title": "",
  "body": "  For any , there exists such that .    By , there exists such that . Then .  Consider the finite set Since , the set of integers in that are at most is non-empty. Let be the largest such integer.  Then . Also , because . Hence . By maximality of , the integer cannot satisfy . Therefore , and so .   "
},
{
  "id": "prop-integer-between-reals",
  "level": "2",
  "url": "sec-completeness-axiom.html#prop-integer-between-reals",
  "type": "Proposition",
  "number": "1.2.6",
  "title": "",
  "body": "  For any , if , then there exists such that .    By , there exists such that .  If , then so , contradicting the hypothesis. Therefore .  Let . Then and . In particular, .   "
},
{
  "id": "subsec-completeness-consequences-8",
  "level": "2",
  "url": "sec-completeness-axiom.html#subsec-completeness-consequences-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dense "
},
{
  "id": "prop-q-dense-in-r",
  "level": "2",
  "url": "sec-completeness-axiom.html#prop-q-dense-in-r",
  "type": "Proposition",
  "number": "1.2.7",
  "title": "",
  "body": "  The set is dense in .    Let with . Then , so by there exists such that .  Applying to the numbers and , we obtain an integer such that .  Since , dividing by gives . Because , this proves that is dense in .   "
},
{
  "id": "thm-positive-square-root-existence",
  "level": "2",
  "url": "sec-completeness-axiom.html#thm-positive-square-root-existence",
  "type": "Theorem",
  "number": "1.2.8",
  "title": "Existence of Positive Square Roots.",
  "body": " Existence of Positive Square Roots   For each , there exists a unique such that .    Uniqueness is immediate because is strictly increasing on .  For existence, define . The set is non-empty: if , then ; if , then . It is bounded above by , since implies . By completeness, exists.  If , then for sufficiently small , we still have , so , contradicting that is an upper bound of . If , then for sufficiently small , ; then every satisfies , so is an upper bound of , contradicting leastness of . Hence .   "
},
{
  "id": "ex-ch1",
  "level": "1",
  "url": "ex-ch1.html",
  "type": "Exercises",
  "number": "1.3",
  "title": "Exercises",
  "body": " Exercises    Let . Find all upper bounds of and all lower bounds of . Is bounded?      Give an example of bounded sets ( ) such that is not bounded. Give an example of two non-empty sets bounded above whose intersection is empty.      For each set, decide whether it is an interval. Justify your answer.            Suppose is a nonempty subset of a bounded set . Show that       Compute the intersection of the two intervals and , and express your answer in interval notation.      Give one example of two intervals whose union is an interval, and one example of two intervals whose union is not an interval.      Let . Define by , where and . Show that is a bijection.      Is each of the following sets finite, countably infinite, or uncountable?            Prove that the least upper bound property is equivalent to: every non-empty subset of that is bounded below has an infimum.      Prove that is not bounded above in .      Let . Show that is non-empty and bounded above in , but has no supremum in .    "
},
{
  "id": "ex-ch1-upper-lower-bounds",
  "level": "2",
  "url": "ex-ch1.html#ex-ch1-upper-lower-bounds",
  "type": "Exercise",
  "number": "1.3.1",
  "title": "",
  "body": "  Let . Find all upper bounds of and all lower bounds of . Is bounded?   "
},
{
  "id": "ex-ch1-union-intersection-bounded",
  "level": "2",
  "url": "ex-ch1.html#ex-ch1-union-intersection-bounded",
  "type": "Exercise",
  "number": "1.3.2",
  "title": "",
  "body": "  Give an example of bounded sets ( ) such that is not bounded. Give an example of two non-empty sets bounded above whose intersection is empty.   "
},
{
  "id": "ex-ch1-interval-membership",
  "level": "2",
  "url": "ex-ch1.html#ex-ch1-interval-membership",
  "type": "Exercise",
  "number": "1.3.3",
  "title": "",
  "body": "  For each set, decide whether it is an interval. Justify your answer.         "
},
{
  "id": "ex-sec-completeness-sup-monotone",
  "level": "2",
  "url": "ex-ch1.html#ex-sec-completeness-sup-monotone",
  "type": "Exercise",
  "number": "1.3.4",
  "title": "",
  "body": "  Suppose is a nonempty subset of a bounded set . Show that    "
},
{
  "id": "ex-ch1-intersection-intervals",
  "level": "2",
  "url": "ex-ch1.html#ex-ch1-intersection-intervals",
  "type": "Exercise",
  "number": "1.3.5",
  "title": "",
  "body": "  Compute the intersection of the two intervals and , and express your answer in interval notation.   "
},
{
  "id": "ex-ch1-union-overlap-vs-disjoint",
  "level": "2",
  "url": "ex-ch1.html#ex-ch1-union-overlap-vs-disjoint",
  "type": "Exercise",
  "number": "1.3.6",
  "title": "",
  "body": "  Give one example of two intervals whose union is an interval, and one example of two intervals whose union is not an interval.   "
},
{
  "id": "ex-ch1-bijection-open-interval",
  "level": "2",
  "url": "ex-ch1.html#ex-ch1-bijection-open-interval",
  "type": "Exercise",
  "number": "1.3.7",
  "title": "",
  "body": "  Let . Define by , where and . Show that is a bijection.   "
},
{
  "id": "ex-ch1-countability-intervals",
  "level": "2",
  "url": "ex-ch1.html#ex-ch1-countability-intervals",
  "type": "Exercise",
  "number": "1.3.8",
  "title": "",
  "body": "  Is each of the following sets finite, countably infinite, or uncountable?         "
},
{
  "id": "ex-ch1-completeness-infimum-equivalent",
  "level": "2",
  "url": "ex-ch1.html#ex-ch1-completeness-infimum-equivalent",
  "type": "Exercise",
  "number": "1.3.9",
  "title": "",
  "body": "  Prove that the least upper bound property is equivalent to: every non-empty subset of that is bounded below has an infimum.   "
},
{
  "id": "ex-ch1-completeness-n-unbounded",
  "level": "2",
  "url": "ex-ch1.html#ex-ch1-completeness-n-unbounded",
  "type": "Exercise",
  "number": "1.3.10",
  "title": "",
  "body": "  Prove that is not bounded above in .   "
},
{
  "id": "ex-ch1-completeness-q-not-complete",
  "level": "2",
  "url": "ex-ch1.html#ex-ch1-completeness-q-not-complete",
  "type": "Exercise",
  "number": "1.3.11",
  "title": "",
  "body": "  Let . Show that is non-empty and bounded above in , but has no supremum in .   "
},
{
  "id": "sec-sequences",
  "level": "1",
  "url": "sec-sequences.html",
  "type": "Section",
  "number": "2.1",
  "title": "Sequences",
  "body": " Sequences   Definitions  An infinite sequence sequence infinite is a function whose domain is, up to order isomorphism, the ordered set . Since we will only consider infinite sequences here, we simply call them sequences . If is a sequence, we write for its value at and call the -th term term of a sequence of the sequence. We denote the sequence by .  Since a real sequence is a function from to , notions such as bounded above , bounded below , bounded , increasing , and decreasing apply exactly as they do for functions. An increasing (resp. a decreasing) sequence is bounded below (resp. above) by its first term. A sequence is constant if and only if it is both increasing and decreasing. We say that is strictly increasing if whenever . The concept strictly decreasing is defined similarly. We often regard real numbers as constant sequences.     is decreasing and bounded.  is increasing and bounded below, but not bounded above.  is bounded, but neither increasing nor decreasing.     A real sequence is called null null sequence if for every there exists such that   Equivalently, is null if for every , the inequality holds for all but finitely many .    The sequence is null.    We say that a sequence  converges convergent sequence to , written or , if the sequence is null. In that case is called a limit limit of a sequence of the sequence. A sequence is convergent  convergent sequence if it has a limit. A sequence is divergent divergent sequence if it does not converge.    Here are a few examples of tails:   If , then the 0-tail is , the 1-tail is , and the 3-tail is .  If , then the 2-tail is .  If , then the 1-tail is , while the 2-tail is .     Different tails of the same sequence need not be equal, but the next proposition shows that they always have the same convergence behavior.    A sequence and any of its tails have the same convergence behavior. More precisely, either both diverge, or both converge and have the same limit.    Suppose and . Then for any , there exists such that for all . But if , then so is . Therefore, for all . This shows that .  Suppose is divergent but a tail of converges, say for some and . Then for any , there exists such that whenever . But that means whenever , we have . This shows that .    The following corollary is now clear.    If a tail of one sequence is equal to a tail of another sequence, then the two sequences have the same convergence behavior.      Fundamental Results  Before going through some fundamental results about sequences, we introduce a handy shorthand: Instead of saying \"there exists such that for all \", we often suppress the reference to (which may depend on other quantities) and say one of the following phrases:   for all sufficiently large ,  for all but finitely many ,  for all ,  for all .   With this convention, the statement that is null becomes: for every , we have for all .  For , the -tail tail K-tail of a sequence is the sequence . So, the 0-tail of a sequence is the sequence itself. A tail tail of a sequence of a sequence is simply a -tail for some .    Let and be real sequences.   is null if and only if is null if and only if is null.  If is null and is bounded, then is null.  If and are null, then is null.     For (1), note that , so the three conditions are equivalent.  For (2), choose with for all . For any , and hence for all but finitely many . Since is arbitrary, so is . This shows that the sequence is null.  For (3), given , choose so that for and for . Then for , the triangle inequality gives .      A convergent sequence has a unique limit.    Suppose and . Then and are null sequences, so by their sum is also null.  A constant sequence is null only when its constant value is zero. Therefore , so .      Every convergent sequence is bounded.    Suppose . Then there exists such that whenever , , and so by the triangle inequality,   Hence for every , so is bounded.     Monotone Convergence Theorem   Every bounded increasing sequence converges to the supremum of its set of terms, and every bounded decreasing sequence converges to the infimum of its set of terms.    We prove the increasing case. In this case, the set of terms is bounded above and nonempty; let be its supremum.  For any , is not an upper bound of , so there exists with . Because the sequence is increasing, whenever , Therefore for all , so .  The decreasing case follows by applying the same argument to , or by a direct dual proof using infima.    The next proposition shows that the usual algebraic operations on convergent sequences again produce convergent sequences, and that taking limits commutes with these operations.    Suppose and . Then:   ,  ,  , provided and for all sufficiently large .     Since and are null, gives null. Hence .  Also By , the sequence is bounded. Therefore is null, and since the constant sequence is bounded, is also null. Their sum is null, so .  For the reciprocal, choose such that for all . Then for , , so in particular . Hence Since is null, it follows that .     Squeeze Lemma   Suppose for all and , . Then .    Let . Since and , there exists such that for all we have and .  Using , we obtain for all . Therefore .      Let be nonempty. If is bounded above, then there exists an increasing sequence in such that . If is bounded below, then there exists a decreasing sequence in such that .    We prove the bounded-below case. Let . If , then the constant sequence has the required properties.  Now assume . Choose . Inductively, suppose has been chosen. Since , the number is not a lower bound of . Thus there exists with .  This constructs a decreasing sequence in with for all . By induction, . Since the right-hand side tends to , the squeeze lemma gives .  The bounded-above case is proved similarly, or by applying the bounded-below case to .      If and for all , then .    Suppose instead that . Then for every , , so . This contradicts . Therefore .      If , , and for all , then .    The sequence converges to by , and each term is nonnegative. Hence by , so .      Subsequences  A subsequence subsequence of a sequence is a sequence of the form , where is a strictly increasing sequence of natural numbers.    Every subsequence of a convergent sequence converges to the same limit.    Suppose and is a subsequence. Since is strictly increasing, we have for every .  Let . Choose such that for all . If , then , so . Hence .     "
},
{
  "id": "subsec-sequences-definitions-2",
  "level": "2",
  "url": "sec-sequences.html#subsec-sequences-definitions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "infinite sequence sequences -th term "
},
{
  "id": "subsec-sequences-definitions-3",
  "level": "2",
  "url": "sec-sequences.html#subsec-sequences-definitions-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bounded above bounded below bounded increasing decreasing constant strictly increasing strictly decreasing "
},
{
  "id": "eg-basic-sequences",
  "level": "2",
  "url": "sec-sequences.html#eg-basic-sequences",
  "type": "Example",
  "number": "2.1.1",
  "title": "",
  "body": "   is decreasing and bounded.  is increasing and bounded below, but not bounded above.  is bounded, but neither increasing nor decreasing.    "
},
{
  "id": "subsec-sequences-definitions-5",
  "level": "2",
  "url": "sec-sequences.html#subsec-sequences-definitions-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "null "
},
{
  "id": "eg-one-over-n-null",
  "level": "2",
  "url": "sec-sequences.html#eg-one-over-n-null",
  "type": "Example",
  "number": "2.1.2",
  "title": "",
  "body": "  The sequence is null.   "
},
{
  "id": "subsec-sequences-definitions-8",
  "level": "2",
  "url": "sec-sequences.html#subsec-sequences-definitions-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "converges limit convergent divergent "
},
{
  "id": "eg-sequences-k-tails",
  "level": "2",
  "url": "sec-sequences.html#eg-sequences-k-tails",
  "type": "Example",
  "number": "2.1.3",
  "title": "",
  "body": "  Here are a few examples of tails:   If , then the 0-tail is , the 1-tail is , and the 3-tail is .  If , then the 2-tail is .  If , then the 1-tail is , while the 2-tail is .    "
},
{
  "id": "prop-sequences-tail",
  "level": "2",
  "url": "sec-sequences.html#prop-sequences-tail",
  "type": "Proposition",
  "number": "2.1.4",
  "title": "",
  "body": "  A sequence and any of its tails have the same convergence behavior. More precisely, either both diverge, or both converge and have the same limit.    Suppose and . Then for any , there exists such that for all . But if , then so is . Therefore, for all . This shows that .  Suppose is divergent but a tail of converges, say for some and . Then for any , there exists such that whenever . But that means whenever , we have . This shows that .   "
},
{
  "id": "cor-sequences-finite-changes",
  "level": "2",
  "url": "sec-sequences.html#cor-sequences-finite-changes",
  "type": "Corollary",
  "number": "2.1.5",
  "title": "",
  "body": "  If a tail of one sequence is equal to a tail of another sequence, then the two sequences have the same convergence behavior.   "
},
{
  "id": "subsec-sequences-fundamental-results-5",
  "level": "2",
  "url": "sec-sequences.html#subsec-sequences-fundamental-results-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "-tail tail "
},
{
  "id": "prop-null-sequence-basic-operations",
  "level": "2",
  "url": "sec-sequences.html#prop-null-sequence-basic-operations",
  "type": "Proposition",
  "number": "2.1.6",
  "title": "",
  "body": "  Let and be real sequences.   is null if and only if is null if and only if is null.  If is null and is bounded, then is null.  If and are null, then is null.     For (1), note that , so the three conditions are equivalent.  For (2), choose with for all . For any , and hence for all but finitely many . Since is arbitrary, so is . This shows that the sequence is null.  For (3), given , choose so that for and for . Then for , the triangle inequality gives .   "
},
{
  "id": "prop-convergent-sequence-unique-limit",
  "level": "2",
  "url": "sec-sequences.html#prop-convergent-sequence-unique-limit",
  "type": "Proposition",
  "number": "2.1.7",
  "title": "",
  "body": "  A convergent sequence has a unique limit.    Suppose and . Then and are null sequences, so by their sum is also null.  A constant sequence is null only when its constant value is zero. Therefore , so .   "
},
{
  "id": "prop-convergent-sequence-bounded",
  "level": "2",
  "url": "sec-sequences.html#prop-convergent-sequence-bounded",
  "type": "Proposition",
  "number": "2.1.8",
  "title": "",
  "body": "  Every convergent sequence is bounded.    Suppose . Then there exists such that whenever , , and so by the triangle inequality,   Hence for every , so is bounded.   "
},
{
  "id": "thm-monotone-convergence",
  "level": "2",
  "url": "sec-sequences.html#thm-monotone-convergence",
  "type": "Theorem",
  "number": "2.1.9",
  "title": "Monotone Convergence Theorem.",
  "body": " Monotone Convergence Theorem   Every bounded increasing sequence converges to the supremum of its set of terms, and every bounded decreasing sequence converges to the infimum of its set of terms.    We prove the increasing case. In this case, the set of terms is bounded above and nonempty; let be its supremum.  For any , is not an upper bound of , so there exists with . Because the sequence is increasing, whenever , Therefore for all , so .  The decreasing case follows by applying the same argument to , or by a direct dual proof using infima.   "
},
{
  "id": "prop-limit-laws-sequences",
  "level": "2",
  "url": "sec-sequences.html#prop-limit-laws-sequences",
  "type": "Proposition",
  "number": "2.1.10",
  "title": "",
  "body": "  Suppose and . Then:   ,  ,  , provided and for all sufficiently large .     Since and are null, gives null. Hence .  Also By , the sequence is bounded. Therefore is null, and since the constant sequence is bounded, is also null. Their sum is null, so .  For the reciprocal, choose such that for all . Then for , , so in particular . Hence Since is null, it follows that .   "
},
{
  "id": "prop-squeeze-lemma",
  "level": "2",
  "url": "sec-sequences.html#prop-squeeze-lemma",
  "type": "Proposition",
  "number": "2.1.11",
  "title": "Squeeze Lemma.",
  "body": " Squeeze Lemma   Suppose for all and , . Then .    Let . Since and , there exists such that for all we have and .  Using , we obtain for all . Therefore .   "
},
{
  "id": "prop-sequences-approximate-sup-inf",
  "level": "2",
  "url": "sec-sequences.html#prop-sequences-approximate-sup-inf",
  "type": "Proposition",
  "number": "2.1.12",
  "title": "",
  "body": "  Let be nonempty. If is bounded above, then there exists an increasing sequence in such that . If is bounded below, then there exists a decreasing sequence in such that .    We prove the bounded-below case. Let . If , then the constant sequence has the required properties.  Now assume . Choose . Inductively, suppose has been chosen. Since , the number is not a lower bound of . Thus there exists with .  This constructs a decreasing sequence in with for all . By induction, . Since the right-hand side tends to , the squeeze lemma gives .  The bounded-above case is proved similarly, or by applying the bounded-below case to .   "
},
{
  "id": "prop-limit-preserves-nonnegativity",
  "level": "2",
  "url": "sec-sequences.html#prop-limit-preserves-nonnegativity",
  "type": "Proposition",
  "number": "2.1.13",
  "title": "",
  "body": "  If and for all , then .    Suppose instead that . Then for every , , so . This contradicts . Therefore .   "
},
{
  "id": "cor-limit-preserves-order",
  "level": "2",
  "url": "sec-sequences.html#cor-limit-preserves-order",
  "type": "Corollary",
  "number": "2.1.14",
  "title": "",
  "body": "  If , , and for all , then .    The sequence converges to by , and each term is nonnegative. Hence by , so .   "
},
{
  "id": "subsec-sequences-subsequences-2",
  "level": "2",
  "url": "sec-sequences.html#subsec-sequences-subsequences-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subsequence "
},
{
  "id": "prop-subsequence-of-convergent-sequence",
  "level": "2",
  "url": "sec-sequences.html#prop-subsequence-of-convergent-sequence",
  "type": "Proposition",
  "number": "2.1.15",
  "title": "",
  "body": "  Every subsequence of a convergent sequence converges to the same limit.    Suppose and is a subsequence. Since is strictly increasing, we have for every .  Let . Choose such that for all . If , then , so . Hence .   "
},
{
  "id": "ex-ch2",
  "level": "1",
  "url": "ex-ch2.html",
  "type": "Exercises",
  "number": "2.2",
  "title": "Exercises",
  "body": " Exercises    Prove directly from the definition that is a null sequence.      Let . Show that is increasing and converges. Find its limit.      Use the squeeze lemma to prove that .      Give a divergent sequence that has a convergent subsequence.    "
},
{
  "id": "ex-sequences-null-basic",
  "level": "2",
  "url": "ex-ch2.html#ex-sequences-null-basic",
  "type": "Exercise",
  "number": "2.2.1",
  "title": "",
  "body": "  Prove directly from the definition that is a null sequence.   "
},
{
  "id": "ex-sequences-monotone-bounded-convergent",
  "level": "2",
  "url": "ex-ch2.html#ex-sequences-monotone-bounded-convergent",
  "type": "Exercise",
  "number": "2.2.2",
  "title": "",
  "body": "  Let . Show that is increasing and converges. Find its limit.   "
},
{
  "id": "ex-sequences-squeeze",
  "level": "2",
  "url": "ex-ch2.html#ex-sequences-squeeze",
  "type": "Exercise",
  "number": "2.2.3",
  "title": "",
  "body": "  Use the squeeze lemma to prove that .   "
},
{
  "id": "ex-sequences-subsequence-divergent-example",
  "level": "2",
  "url": "ex-ch2.html#ex-sequences-subsequence-divergent-example",
  "type": "Exercise",
  "number": "2.2.4",
  "title": "",
  "body": "  Give a divergent sequence that has a convergent subsequence.   "
},
{
  "id": "sec-cardinality-subsets-real",
  "level": "1",
  "url": "sec-cardinality-subsets-real.html",
  "type": "Section",
  "number": "A.1",
  "title": "Cardinality",
  "body": " Cardinality  For sets , means there is a bijection between them. In that case, we say that and have the same cardinality cardinality . We write if there is an injection . A set is countably infinite countably infinite if . A set is countable countable if it is either finite or countably infinite.  We begin with standard countable models that will be reused in later proofs.    The set is countable.    The map , , is bijective, with inverse . Hence .      The set is countable.    Define by and . This is bijective, so .      The set is countable.    For each , the diagonal is finite. Also . Enumerating each diagonal in increasing order of gives an enumeration of , so is countable.    The next theorem is the main comparison tool.   Cantor-Bernstein-Schroder   If and , then .    Proofs of can be found in and .    A countable union of countable sets is countable.    Let be a countable family (indexed by ) of countable sets. For , let be the least index with . Then is an injection into . For each , choose an injection . Then injects into . Since is countable, the union is countable.      The set is countable (hence is countable).    The map gives an injection , so . For the reverse inequality, map to where in lowest terms and . This is injective, and is countable (as a countable union of countable sets), so . By , .    Let be a set and let . The indicator function indicator function of in , denoted (or when is understood), is the map defined by   For any set , indicator functions give a bijection , where is the set of maps .   Cantor   For every set , .    The map is an injection . To show there is no surjection , suppose is surjective. Define by . Since is surjective, for some . Evaluating at gives , impossible. Hence .      The real line is uncountable.    By , . Define by . If , let be the first index with . Then , so is injective. Therefore , and thus cannot be countable.      The irrational numbers are uncountable.    If were countable, then would be a union of two countable sets, hence countable, contradicting .    "
},
{
  "id": "sec-cardinality-subsets-real-2",
  "level": "2",
  "url": "sec-cardinality-subsets-real.html#sec-cardinality-subsets-real-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cardinality countably infinite countable "
},
{
  "id": "prop-n-plus-zero-countable",
  "level": "2",
  "url": "sec-cardinality-subsets-real.html#prop-n-plus-zero-countable",
  "type": "Proposition",
  "number": "A.1.1",
  "title": "",
  "body": "  The set is countable.    The map , , is bijective, with inverse . Hence .   "
},
{
  "id": "prop-n-times-two-countable",
  "level": "2",
  "url": "sec-cardinality-subsets-real.html#prop-n-times-two-countable",
  "type": "Proposition",
  "number": "A.1.2",
  "title": "",
  "body": "  The set is countable.    Define by and . This is bijective, so .   "
},
{
  "id": "prop-n-square-countable",
  "level": "2",
  "url": "sec-cardinality-subsets-real.html#prop-n-square-countable",
  "type": "Proposition",
  "number": "A.1.3",
  "title": "",
  "body": "  The set is countable.    For each , the diagonal is finite. Also . Enumerating each diagonal in increasing order of gives an enumeration of , so is countable.   "
},
{
  "id": "thm-cantor-bernstein-schroder",
  "level": "2",
  "url": "sec-cardinality-subsets-real.html#thm-cantor-bernstein-schroder",
  "type": "Theorem",
  "number": "A.1.4",
  "title": "Cantor-Bernstein-Schroder.",
  "body": " Cantor-Bernstein-Schroder   If and , then .   "
},
{
  "id": "prop-countable-union-countable",
  "level": "2",
  "url": "sec-cardinality-subsets-real.html#prop-countable-union-countable",
  "type": "Proposition",
  "number": "A.1.5",
  "title": "",
  "body": "  A countable union of countable sets is countable.    Let be a countable family (indexed by ) of countable sets. For , let be the least index with . Then is an injection into . For each , choose an injection . Then injects into . Since is countable, the union is countable.   "
},
{
  "id": "prop-q-countable",
  "level": "2",
  "url": "sec-cardinality-subsets-real.html#prop-q-countable",
  "type": "Proposition",
  "number": "A.1.6",
  "title": "",
  "body": "  The set is countable (hence is countable).    The map gives an injection , so . For the reverse inequality, map to where in lowest terms and . This is injective, and is countable (as a countable union of countable sets), so . By , .   "
},
{
  "id": "sec-cardinality-subsets-real-12",
  "level": "2",
  "url": "sec-cardinality-subsets-real.html#sec-cardinality-subsets-real-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "indicator function "
},
{
  "id": "thm-cantor-power-set",
  "level": "2",
  "url": "sec-cardinality-subsets-real.html#thm-cantor-power-set",
  "type": "Theorem",
  "number": "A.1.7",
  "title": "Cantor.",
  "body": " Cantor   For every set , .    The map is an injection . To show there is no surjection , suppose is surjective. Define by . Since is surjective, for some . Evaluating at gives , impossible. Hence .   "
},
{
  "id": "cor-r-uncountable",
  "level": "2",
  "url": "sec-cardinality-subsets-real.html#cor-r-uncountable",
  "type": "Corollary",
  "number": "A.1.8",
  "title": "",
  "body": "  The real line is uncountable.    By , . Define by . If , let be the first index with . Then , so is injective. Therefore , and thus cannot be countable.   "
},
{
  "id": "prop-irrationals-uncountable",
  "level": "2",
  "url": "sec-cardinality-subsets-real.html#prop-irrationals-uncountable",
  "type": "Proposition",
  "number": "A.1.9",
  "title": "",
  "body": "  The irrational numbers are uncountable.    If were countable, then would be a union of two countable sets, hence countable, contradicting .   "
},
{
  "id": "sec-cardinality-exercises",
  "level": "1",
  "url": "sec-cardinality-exercises.html",
  "type": "Section",
  "number": "A.2",
  "title": "Exercises",
  "body": " Exercises   Show that is countable.  Show that any subset of a countable set is countable.  Show that and have the same cardinality by constructing an explicit bijection.  Show that the intersection of two intervals is empty, a singleton, or an interval.  Show that the union of two overlapping intervals is an interval.   "
},
{
  "id": "sec-axioms-foundations",
  "level": "1",
  "url": "sec-axioms-foundations.html",
  "type": "Section",
  "number": "B.1",
  "title": "Foundations and Consequences",
  "body": " Foundations and Consequences   Ordered-Field Axioms  We start with a set with two operations and , and a subset . We call this an ordered field ordered field when the following hold.     and are commutative and associative, and for all .    There are distinct elements such that and for all .    Every has an additive inverse with , and every nonzero has a multiplicative inverse with .    The set is closed under addition and multiplication.    For each , exactly one of , , holds.    We define if and only if , and if and only if or .  To characterize the real numbers, we add the least upper bound property least upper bound property : every nonempty subset of that is bounded above has a least upper bound in . An ordered field with this property is a complete ordered field complete ordered field .    Uniqueness Up to Isomorphism  A standard theorem says that any two complete ordered fields are isomorphic (as ordered fields). This is the precise sense in which there is only one real number system up to isomorphism.  Reference: , Chapter II, end of Section 4 (after the proof of existence of square roots), where he states that Properties I-VII determine the real number system up to a unique one-to-one correspondence preserving sums and products.    Immediate Consequences of the Axioms  The next results are typical short derivations from the axioms (compare , Chapter II, Sections 1-2).    The additive identity and multiplicative identity are unique. For each , the additive inverse is unique; if , then the multiplicative inverse is unique.    If are additive identities, then . The same argument gives uniqueness of . If both satisfy and , then . The multiplicative case is identical for .      For every : , , and .    Since , distributivity gives . Adding to both sides yields .  Next, , so is an additive inverse of ; by uniqueness, .  Then . Also gives , hence . Therefore .      If , then for every . If and , then . Also, for every .    If , then . But , so .  If additionally , then and . Closure of under multiplication gives , hence .  For , exactly one of , , holds. If , then . Otherwise either or , and . Thus is never negative, i.e. .     "
},
{
  "id": "subsec-axioms-ordered-field-2",
  "level": "2",
  "url": "sec-axioms-foundations.html#subsec-axioms-ordered-field-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ordered field "
},
{
  "id": "subsec-axioms-ordered-field-5",
  "level": "2",
  "url": "sec-axioms-foundations.html#subsec-axioms-ordered-field-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "least upper bound property complete ordered field "
},
{
  "id": "prop-axioms-identity-inverse-uniqueness",
  "level": "2",
  "url": "sec-axioms-foundations.html#prop-axioms-identity-inverse-uniqueness",
  "type": "Proposition",
  "number": "B.1.1",
  "title": "",
  "body": "  The additive identity and multiplicative identity are unique. For each , the additive inverse is unique; if , then the multiplicative inverse is unique.    If are additive identities, then . The same argument gives uniqueness of . If both satisfy and , then . The multiplicative case is identical for .   "
},
{
  "id": "prop-axioms-basic-algebra-consequences",
  "level": "2",
  "url": "sec-axioms-foundations.html#prop-axioms-basic-algebra-consequences",
  "type": "Proposition",
  "number": "B.1.2",
  "title": "",
  "body": "  For every : , , and .    Since , distributivity gives . Adding to both sides yields .  Next, , so is an additive inverse of ; by uniqueness, .  Then . Also gives , hence . Therefore .   "
},
{
  "id": "prop-axioms-basic-order-consequences",
  "level": "2",
  "url": "sec-axioms-foundations.html#prop-axioms-basic-order-consequences",
  "type": "Proposition",
  "number": "B.1.3",
  "title": "",
  "body": "  If , then for every . If and , then . Also, for every .    If , then . But , so .  If additionally , then and . Closure of under multiplication gives , hence .  For , exactly one of , , holds. If , then . Otherwise either or , and . Thus is never negative, i.e. .   "
},
{
  "id": "sec-intervals",
  "level": "1",
  "url": "sec-intervals.html",
  "type": "Section",
  "number": "C.1",
  "title": "Intervals",
  "body": " Intervals  An interval  interval  is a subset of of one of the following forms, where and :             When , the interval is the empty set and . A nondegenerate interval is an interval with at least two points.  An interval contains every point between any two of its elements. In other words, whenever with . Conversely, any subset of with this property is an interval.    Every interval in is one of the nine forms listed above.    Let be an interval. If , then . If is a singleton, then . So we may assume that is nondegenerate.  First suppose that is bounded below but not bounded above. Let . If , then is not a lower bound of , so there is with . Since is not bounded above, there is also with . Because is an interval and , we get . Thus . On the other hand, no element of can be less than . Hence or , according as or .  The case when is bounded above but not bounded below is similar: if , then or .  If is neither bounded below nor bounded above, then for every we can choose with . Hence , so .  Finally, suppose that is bounded below and above. Let and . Since is nondegenerate, we have . If , then is neither a lower bound nor an upper bound of . So there exist with . Therefore . Thus . Also every element of lies in . Consequently, is one of , according to whether and belong to .      Every nondegenerate interval has cardinality . In particular, it is uncountable.    Every such interval contains an open interval and is a subset of . It is enough to show . The map with , , is a bijection . Also is a bijection . Hence , so .      The intersection of two intervals is an interval.    Let be intervals. Since and singletons are intervals, we may assume has at least two points . Since and are intervals, is a subset of both and , and hence of . Thus, is an interval.      The union of two overlapping intervals is an interval.    Let be two overlapping intervals, and pick . If is a singleton, then we are done. Otherwise, we can take in . We must show . If both and lie in the same interval, then is a subset of that interval, hence of . Otherwise, after relabeling we may assume and . If , then , a contradiction. If , then , a contradiction. Therefore . Then we have and . Hence , so is an interval.    "
},
{
  "id": "sec-intervals-2",
  "level": "2",
  "url": "sec-intervals.html#sec-intervals-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "interval "
},
{
  "id": "sec-intervals-4",
  "level": "2",
  "url": "sec-intervals.html#sec-intervals-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "nondegenerate interval "
},
{
  "id": "prop-classification-of-intervals",
  "level": "2",
  "url": "sec-intervals.html#prop-classification-of-intervals",
  "type": "Proposition",
  "number": "C.1.1",
  "title": "",
  "body": "  Every interval in is one of the nine forms listed above.    Let be an interval. If , then . If is a singleton, then . So we may assume that is nondegenerate.  First suppose that is bounded below but not bounded above. Let . If , then is not a lower bound of , so there is with . Since is not bounded above, there is also with . Because is an interval and , we get . Thus . On the other hand, no element of can be less than . Hence or , according as or .  The case when is bounded above but not bounded below is similar: if , then or .  If is neither bounded below nor bounded above, then for every we can choose with . Hence , so .  Finally, suppose that is bounded below and above. Let and . Since is nondegenerate, we have . If , then is neither a lower bound nor an upper bound of . So there exist with . Therefore . Thus . Also every element of lies in . Consequently, is one of , according to whether and belong to .   "
},
{
  "id": "prop-interval-cardinality-r",
  "level": "2",
  "url": "sec-intervals.html#prop-interval-cardinality-r",
  "type": "Proposition",
  "number": "C.1.2",
  "title": "",
  "body": "  Every nondegenerate interval has cardinality . In particular, it is uncountable.    Every such interval contains an open interval and is a subset of . It is enough to show . The map with , , is a bijection . Also is a bijection . Hence , so .   "
},
{
  "id": "prop-intersection-intervals",
  "level": "2",
  "url": "sec-intervals.html#prop-intersection-intervals",
  "type": "Proposition",
  "number": "C.1.3",
  "title": "",
  "body": "  The intersection of two intervals is an interval.    Let be intervals. Since and singletons are intervals, we may assume has at least two points . Since and are intervals, is a subset of both and , and hence of . Thus, is an interval.   "
},
{
  "id": "prop-union-overlapping-intervals",
  "level": "2",
  "url": "sec-intervals.html#prop-union-overlapping-intervals",
  "type": "Proposition",
  "number": "C.1.4",
  "title": "",
  "body": "  The union of two overlapping intervals is an interval.    Let be two overlapping intervals, and pick . If is a singleton, then we are done. Otherwise, we can take in . We must show . If both and lie in the same interval, then is a subset of that interval, hence of . Otherwise, after relabeling we may assume and . If , then , a contradiction. If , then , a contradiction. Therefore . Then we have and . Hence , so is an interval.   "
},
{
  "id": "sec-norm-and-metric-euclidean",
  "level": "1",
  "url": "sec-norm-and-metric-euclidean.html",
  "type": "Section",
  "number": "D.1",
  "title": "Euclidean Norm on <span class=\"process-math\">\\(\\R^n\\)<\/span>",
  "body": " Euclidean Norm on  Euclidean Norm on R^n  For vectors and in , their dot product dot product is . It is symmetric and bilinear.  The Euclidean norm Euclidean norm of is . From the definition we immediately get , if and only if , and for every . When , the norm is just the absolute value: .   Cauchy-Schwarz   For all , .    If , then both sides are zero, so there is nothing to prove. Assume . For each , . Expanding gives   This quadratic polynomial in is never negative, so its discriminant is at most zero: Hence , and taking square roots gives .      For all , .    By bilinearity and , Since both sides are nonnegative, taking square roots gives .      For all , .    By , , so . Interchanging and gives . Therefore .    "
},
{
  "id": "sec-norm-and-metric-euclidean-3",
  "level": "2",
  "url": "sec-norm-and-metric-euclidean.html#sec-norm-and-metric-euclidean-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dot product "
},
{
  "id": "sec-norm-and-metric-euclidean-4",
  "level": "2",
  "url": "sec-norm-and-metric-euclidean.html#sec-norm-and-metric-euclidean-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Euclidean norm "
},
{
  "id": "thm-cauchy-schwarz-rn",
  "level": "2",
  "url": "sec-norm-and-metric-euclidean.html#thm-cauchy-schwarz-rn",
  "type": "Theorem",
  "number": "D.1.1",
  "title": "Cauchy-Schwarz.",
  "body": " Cauchy-Schwarz   For all , .    If , then both sides are zero, so there is nothing to prove. Assume . For each , . Expanding gives   This quadratic polynomial in is never negative, so its discriminant is at most zero: Hence , and taking square roots gives .   "
},
{
  "id": "prop-triangle-inequality-rn",
  "level": "2",
  "url": "sec-norm-and-metric-euclidean.html#prop-triangle-inequality-rn",
  "type": "Proposition",
  "number": "D.1.2",
  "title": "",
  "body": "  For all , .    By bilinearity and , Since both sides are nonnegative, taking square roots gives .   "
},
{
  "id": "prop-reverse-triangle-inequality-rn",
  "level": "2",
  "url": "sec-norm-and-metric-euclidean.html#prop-reverse-triangle-inequality-rn",
  "type": "Proposition",
  "number": "D.1.3",
  "title": "",
  "body": "  For all , .    By , , so . Interchanging and gives . Therefore .   "
},
{
  "id": "sec-norm-and-metric-metrics",
  "level": "1",
  "url": "sec-norm-and-metric-metrics.html",
  "type": "Section",
  "number": "D.2",
  "title": "Metrics",
  "body": " Metrics  Let be a set. A function is called a metric metric on if, for all , the following hold:   .  if and only if .  .  .   For , define the Euclidean distance Euclidean distance by .    The Euclidean distance is a metric on .    Since norms are nonnegative, . Also if and only if , which happens if and only if , that is, .  Symmetry follows from .  For the triangle inequality, by . Therefore is a metric.    "
},
{
  "id": "sec-norm-and-metric-metrics-2",
  "level": "2",
  "url": "sec-norm-and-metric-metrics.html#sec-norm-and-metric-metrics-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "metric "
},
{
  "id": "sec-norm-and-metric-metrics-4",
  "level": "2",
  "url": "sec-norm-and-metric-metrics.html#sec-norm-and-metric-metrics-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Euclidean distance "
},
{
  "id": "prop-euclidean-distance-metric",
  "level": "2",
  "url": "sec-norm-and-metric-metrics.html#prop-euclidean-distance-metric",
  "type": "Proposition",
  "number": "D.2.1",
  "title": "",
  "body": "  The Euclidean distance is a metric on .    Since norms are nonnegative, . Also if and only if , which happens if and only if , that is, .  Symmetry follows from .  For the triangle inequality, by . Therefore is a metric.   "
},
{
  "id": "sec-norm-and-metric-exercises",
  "level": "1",
  "url": "sec-norm-and-metric-exercises.html",
  "type": "Section",
  "number": "D.3",
  "title": "Exercises",
  "body": " Exercises   Show directly from the definition that for , one has if and only if .  Let . Show that if , then .  Prove that for all , .  For , the Euclidean distance on is . Verify the four metric axioms in this case.   "
},
{
  "id": "references-general",
  "level": "1",
  "url": "references-general.html",
  "type": "References",
  "number": "",
  "title": "References",
  "body": " Maxwell Rosenlicht, Introduction to Analysis .  Walter Rudin, Principles of Mathematical Analysis .  Keith G. Binmore, Mathematical Analysis: A Straightforward Approach .  Paul Garrett, A Proof of the Cantor-Schroeder-Bernstein Theorem . Online lecture note .  Trevor Hyde, A Dynamical Proof of the Cantor-Bernstein Theorem . Online note .  "
},
{
  "id": "backmatter-7",
  "level": "1",
  "url": "backmatter-7.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-8",
  "level": "1",
  "url": "backmatter-8.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
